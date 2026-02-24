import { useState } from "react";
import { Calendar, Gift, Users, CheckCircle, XCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

type BookingStatus = "confirmed" | "cancelled" | "pending";

interface Booking {
  id: string;
  client: string;
  email: string;
  service: string;
  date: string;
  time: string;
  status: BookingStatus;
  deposit: boolean;
}

interface Voucher {
  id: string;
  code: string;
  amount: number;
  occasion: string;
  purchasedBy: string;
  recipientEmail: string;
  purchasedAt: string;
  redeemed: boolean;
}

const mockBookings: Booking[] = [
  { id: "1", client: "Sarah Johnson", email: "sarah@email.com", service: "Head Spa Treatment", date: "2026-02-26", time: "10:00", status: "confirmed", deposit: true },
  { id: "2", client: "Emma Wilson", email: "emma@email.com", service: "Luxury Haircut", date: "2026-02-26", time: "11:30", status: "pending", deposit: true },
  { id: "3", client: "Aiko Tanaka", email: "aiko@email.com", service: "Organic Hair Care", date: "2026-02-27", time: "14:00", status: "confirmed", deposit: true },
  { id: "4", client: "Lily Chen", email: "lily@email.com", service: "Head Spa Treatment", date: "2026-02-28", time: "09:30", status: "cancelled", deposit: false },
];

const mockVouchers: Voucher[] = [
  { id: "v1", code: "ARG-BDY-X7K2", amount: 50, occasion: "Birthday", purchasedBy: "John Smith", recipientEmail: "jane@email.com", purchasedAt: "2026-02-20", redeemed: false },
  { id: "v2", code: "ARG-GFT-M4P9", amount: 75, occasion: "Mother's Day", purchasedBy: "David Lee", recipientEmail: "mum@email.com", purchasedAt: "2026-02-18", redeemed: true },
  { id: "v3", code: "ARG-GRD-Q1R5", amount: 30, occasion: "Graduation", purchasedBy: "Nina Park", recipientEmail: "grad@email.com", purchasedAt: "2026-02-22", redeemed: false },
];

const statusColors: Record<BookingStatus, string> = {
  confirmed: "text-primary bg-secondary",
  pending: "text-gold bg-gold-light/30",
  cancelled: "text-destructive bg-destructive/10",
};

const AdminPage = () => {
  const [tab, setTab] = useState<"bookings" | "vouchers">("bookings");
  const [bookings, setBookings] = useState(mockBookings);

  const updateStatus = (id: string, status: BookingStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status } : b))
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-10 md:py-16">
        <div className="mb-8">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">Admin Panel</p>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground">Manage Argana London</h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 bg-muted p-1 rounded-sm w-fit">
          <button
            onClick={() => setTab("bookings")}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 text-sm rounded-sm transition-all",
              tab === "bookings" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
            )}
          >
            <Calendar size={16} /> Bookings
          </button>
          <button
            onClick={() => setTab("vouchers")}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 text-sm rounded-sm transition-all",
              tab === "vouchers" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
            )}
          >
            <Gift size={16} /> Vouchers
          </button>
        </div>

        {/* Bookings Tab */}
        {tab === "bookings" && (
          <div className="space-y-4 animate-fade-in">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Total", value: bookings.length, icon: Users },
                { label: "Confirmed", value: bookings.filter((b) => b.status === "confirmed").length, icon: CheckCircle },
                { label: "Pending", value: bookings.filter((b) => b.status === "pending").length, icon: Clock },
                { label: "Cancelled", value: bookings.filter((b) => b.status === "cancelled").length, icon: XCircle },
              ].map((stat) => (
                <div key={stat.label} className="bg-card border border-border rounded-sm p-4">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                    <stat.icon size={14} /> {stat.label}
                  </div>
                  <p className="font-heading text-2xl">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Booking Cards (mobile-first) */}
            <div className="space-y-3">
              {bookings.map((booking) => (
                <div key={booking.id} className="bg-card border border-border rounded-sm p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-medium text-foreground">{booking.client}</h3>
                      <p className="text-sm text-muted-foreground">{booking.email}</p>
                    </div>
                    <span className={cn("text-xs px-2.5 py-1 rounded-sm", statusColors[booking.status])}>
                      {booking.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-4">
                    <span>{booking.service}</span>
                    <span className="text-right">{booking.date} at {booking.time}</span>
                  </div>
                  {booking.status !== "cancelled" && (
                    <div className="flex gap-2 pt-3 border-t border-border">
                      {booking.status !== "confirmed" && (
                        <button
                          onClick={() => updateStatus(booking.id, "confirmed")}
                          className="text-xs px-4 py-1.5 bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
                        >
                          Confirm
                        </button>
                      )}
                      <button
                        onClick={() => updateStatus(booking.id, "cancelled")}
                        className="text-xs px-4 py-1.5 border border-border text-muted-foreground rounded-sm hover:border-destructive hover:text-destructive transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Vouchers Tab */}
        {tab === "vouchers" && (
          <div className="space-y-3 animate-fade-in">
            {mockVouchers.map((voucher) => (
              <div key={voucher.id} className="bg-card border border-border rounded-sm p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-heading text-lg">£{voucher.amount}</h3>
                    <p className="text-sm text-muted-foreground">{voucher.occasion}</p>
                  </div>
                  <span
                    className={cn(
                      "text-xs px-2.5 py-1 rounded-sm",
                      voucher.redeemed
                        ? "text-muted-foreground bg-muted"
                        : "text-primary bg-secondary"
                    )}
                  >
                    {voucher.redeemed ? "Redeemed" : "Active"}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Code: <span className="font-mono text-foreground">{voucher.code}</span></p>
                  <p>Purchased by: {voucher.purchasedBy}</p>
                  <p>Sent to: {voucher.recipientEmail}</p>
                  <p>Date: {voucher.purchasedAt}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
