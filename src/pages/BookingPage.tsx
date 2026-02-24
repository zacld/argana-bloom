import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const services = [
  { id: "head-spa", title: "Head Spa Treatment", duration: "60 min", price: 65 },
  { id: "haircut", title: "Luxury Haircut", duration: "45 min", price: 45 },
  { id: "hair-care", title: "Organic Hair Care", duration: "75 min", price: 80 },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
];

const DEPOSIT = 10;

const BookingPage = () => {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const { toast } = useToast();

  const service = services.find((s) => s.id === selectedService);

  const steps = ["Service", "Date & Time", "Your Details", "Confirm"];

  const canProceed = () => {
    if (step === 0) return !!selectedService;
    if (step === 1) return !!selectedDate && !!selectedTime;
    if (step === 2) return formData.name && formData.email && formData.phone;
    return true;
  };

  const handleConfirm = () => {
    toast({
      title: "Booking Confirmed!",
      description: `Your ${service?.title} on ${selectedDate ? format(selectedDate, "PPP") : ""} at ${selectedTime} has been reserved. A £${DEPOSIT} deposit will be collected via Stripe.`,
    });
    setStep(4);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-10 md:py-16 max-w-2xl">
        <div className="text-center mb-10">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">Book Your Visit</p>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground">Reserve a Treatment</h1>
        </div>

        {/* Step indicator */}
        {step < 4 && (
          <div className="flex items-center justify-center gap-2 mb-10">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-body transition-colors",
                    i <= step
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {i < step ? <Check size={14} /> : i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className={cn("w-8 h-px", i < step ? "bg-primary" : "bg-border")} />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Step 0: Service Selection */}
        {step === 0 && (
          <div className="space-y-4 animate-fade-in">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedService(s.id)}
                className={cn(
                  "w-full text-left p-6 rounded-sm border transition-all",
                  selectedService === s.id
                    ? "border-primary bg-secondary"
                    : "border-border bg-card hover:border-primary/40"
                )}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-lg">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{s.duration}</p>
                  </div>
                  <span className="font-heading text-xl">£{s.price}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Step 1: Date & Time */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <label className="text-sm font-body text-muted-foreground mb-2 block">Select Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className={cn(
                      "w-full flex items-center gap-3 p-4 border rounded-sm text-left text-sm",
                      selectedDate ? "text-foreground" : "text-muted-foreground",
                      "border-border bg-card hover:border-primary/40 transition-colors"
                    )}
                  >
                    <CalendarIcon size={16} />
                    {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {selectedDate && (
              <div>
                <label className="text-sm font-body text-muted-foreground mb-3 block">
                  Available Times — {format(selectedDate, "EEEE, d MMM")}
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={cn(
                        "py-2.5 px-3 rounded-sm text-sm border transition-all",
                        selectedTime === t
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border bg-card hover:border-primary/40 text-foreground"
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Client Details */}
        {step === 2 && (
          <div className="space-y-5 animate-fade-in">
            {[
              { key: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
              { key: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
              { key: "phone", label: "Phone Number", type: "tel", placeholder: "+44 ..." },
            ].map((field) => (
              <div key={field.key}>
                <label className="text-sm font-body text-muted-foreground mb-2 block">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.key as keyof typeof formData]}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, [field.key]: e.target.value }))
                  }
                  className="w-full p-4 border border-border rounded-sm bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            ))}
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && service && (
          <div className="animate-fade-in">
            <div className="bg-card border border-border rounded-sm p-6 md:p-8 space-y-4">
              <h3 className="font-heading text-xl mb-4">Booking Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Treatment</span>
                  <span className="font-medium">{service.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date</span>
                  <span>{selectedDate && format(selectedDate, "PPP")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time</span>
                  <span>{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name</span>
                  <span>{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email</span>
                  <span>{formData.email}</span>
                </div>
                <div className="border-t border-border pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total</span>
                    <span className="font-heading text-lg">£{service.price}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-muted-foreground">Deposit (due now)</span>
                    <span className="text-primary font-medium">£{DEPOSIT}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-muted-foreground">Remaining (pay on the day)</span>
                    <span>£{service.price - DEPOSIT}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <div className="text-center animate-fade-in py-10">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="text-primary-foreground" size={28} />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl mb-3">Booking Confirmed</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Thank you, {formData.name}! A confirmation email has been sent to {formData.email}. 
              We look forward to seeing you.
            </p>
            <a
              href="/"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
            >
              Back to Home
            </a>
          </div>
        )}

        {/* Navigation buttons */}
        {step < 4 && (
          <div className="flex items-center justify-between mt-10">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              className={cn(
                "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
                step === 0 && "invisible"
              )}
            >
              <ArrowLeft size={16} /> Back
            </button>

            {step < 3 ? (
              <button
                onClick={() => canProceed() && setStep((s) => s + 1)}
                disabled={!canProceed()}
                className={cn(
                  "flex items-center gap-2 px-8 py-3 text-sm tracking-wide rounded-sm transition-all",
                  canProceed()
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                )}
              >
                Continue <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleConfirm}
                className="bg-primary text-primary-foreground px-8 py-3 text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
              >
                Pay £{DEPOSIT} Deposit & Confirm
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
