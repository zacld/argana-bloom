import { useState } from "react";
import { Gift, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const presetAmounts = [30, 50, 75];
const occasions = ["Birthday", "Mother's Day", "Graduation", "General Gift"];

const GiftVouchersPage = () => {
  const [amount, setAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [occasion, setOccasion] = useState("General Gift");
  const [message, setMessage] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [senderName, setSenderName] = useState("");
  const [purchased, setPurchased] = useState(false);
  const { toast } = useToast();

  const finalAmount = isCustom ? Number(customAmount) : amount;

  const handlePurchase = () => {
    if (!finalAmount || finalAmount < 10 || !recipientEmail || !senderName) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setPurchased(true);
    toast({ title: "Voucher Purchased!", description: "A gift voucher has been sent to the recipient's email." });
  };

  if (purchased) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="container max-w-lg text-center animate-fade-in py-16">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-primary-foreground" size={28} />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl mb-3">Voucher Sent!</h2>
          <p className="text-muted-foreground mb-2">
            A £{finalAmount} gift voucher for <strong>{occasion}</strong> has been emailed to {recipientEmail}.
          </p>
          <p className="text-sm text-muted-foreground mb-8">The voucher includes a unique redemption code.</p>
          <a
            href="/"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-10 md:py-16 max-w-2xl">
        <div className="text-center mb-10">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">The Perfect Gift</p>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground">Gift Vouchers</h1>
          <p className="text-muted-foreground mt-3 text-sm max-w-md mx-auto">
            Give the gift of relaxation with an Argana London voucher, delivered instantly via email.
          </p>
        </div>

        <div className="space-y-8 animate-fade-in">
          {/* Amount */}
          <div>
            <label className="text-sm font-body text-muted-foreground mb-3 block">Select Amount</label>
            <div className="flex flex-wrap gap-3">
              {presetAmounts.map((a) => (
                <button
                  key={a}
                  onClick={() => { setAmount(a); setIsCustom(false); }}
                  className={cn(
                    "px-6 py-3 rounded-sm border text-sm transition-all",
                    !isCustom && amount === a
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border bg-card hover:border-primary/40"
                  )}
                >
                  £{a}
                </button>
              ))}
              <button
                onClick={() => { setIsCustom(true); setAmount(null); }}
                className={cn(
                  "px-6 py-3 rounded-sm border text-sm transition-all",
                  isCustom
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border bg-card hover:border-primary/40"
                )}
              >
                Custom
              </button>
            </div>
            {isCustom && (
              <input
                type="number"
                min="10"
                placeholder="Enter amount (min £10)"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="mt-3 w-full p-4 border border-border rounded-sm bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            )}
          </div>

          {/* Occasion */}
          <div>
            <label className="text-sm font-body text-muted-foreground mb-3 block">Occasion</label>
            <div className="flex flex-wrap gap-2">
              {occasions.map((o) => (
                <button
                  key={o}
                  onClick={() => setOccasion(o)}
                  className={cn(
                    "px-5 py-2.5 rounded-sm border text-sm transition-all",
                    occasion === o
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border bg-card hover:border-primary/40"
                  )}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-body text-muted-foreground mb-2 block">Personal Message (optional)</label>
            <textarea
              rows={3}
              placeholder="Add a personal note..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 border border-border rounded-sm bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          {/* Recipient & Sender */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-body text-muted-foreground mb-2 block">Your Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full p-4 border border-border rounded-sm bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-sm font-body text-muted-foreground mb-2 block">Recipient's Email</label>
              <input
                type="email"
                placeholder="recipient@email.com"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                className="w-full p-4 border border-border rounded-sm bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Purchase Button */}
          <div className="pt-4">
            <button
              onClick={handlePurchase}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
            >
              <Gift size={16} />
              Purchase £{finalAmount || "—"} Voucher
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftVouchersPage;
