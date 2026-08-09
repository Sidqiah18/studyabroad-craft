import { useState, type ReactNode } from "react";
import { CheckCircle2, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const destinationOptions = [
  "United Kingdom",
  "United States",
  "Australia",
  "Canada",
  "Europe",
  "Malaysia",
  "Turkey",
  "UAE",
];

const inputClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

export function ApplyDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) setTimeout(() => setSent(false), 200);
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Start your application</DialogTitle>
          <DialogDescription>
            Share a few details and a counsellor will map your options within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {sent ? (
          <div className="flex flex-col items-center gap-3 py-10 text-center">
            <CheckCircle2 className="size-12 text-primary" />
            <p className="font-display text-lg font-bold">Application received</p>
            <p className="text-sm text-muted-foreground">
              Thank you — our team will reach out to you shortly.
            </p>
          </div>
        ) : (
          <form
            className="grid gap-4 pt-2"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Full name" className={inputClass} />
              <input required type="email" placeholder="Email address" className={inputClass} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Phone number" className={inputClass} />
              <select required defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Preferred destination
                </option>
                {destinationOptions.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <select required defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Highest qualification
                </option>
                <option>Matric / O-Levels</option>
                <option>Intermediate / A-Levels</option>
                <option>Bachelor's</option>
                <option>Master's</option>
              </select>
              <select required defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Intended intake
                </option>
                <option>Fall 2027</option>
                <option>Spring 2027</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <textarea rows={3} placeholder="Anything else we should know?" className={inputClass} />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Submit application <Send className="size-4" />
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
