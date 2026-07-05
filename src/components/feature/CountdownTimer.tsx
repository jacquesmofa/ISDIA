import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(): TimeLeft {
  const target = new Date('2027-04-06T09:00:00-04:00').getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

interface CountdownTimerProps {
  className?: string;
}

export default function CountdownTimer({ className = '' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const units: { label: string; value: number }[] = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className={`flex items-center gap-3 md:gap-5 ${className}`} role="timer" aria-label="Countdown to summit start">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-3 md:gap-5">
          {i > 0 && (
            <span className="text-primary-500/60 text-xl md:text-2xl font-light" aria-hidden="true">:</span>
          )}
          <div className="flex flex-col items-center min-w-[60px] md:min-w-[80px]">
            <span className="text-3xl md:text-5xl font-heading font-bold text-foreground-50 tabular-nums" aria-live="polite">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] md:text-xs text-foreground-400 uppercase tracking-widest mt-1">
              {unit.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}