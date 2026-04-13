import {
  Lock,
  AlertTriangle,
  GraduationCap,
  Scale,
  Heart,
} from "lucide-react";
import { Badge, Card } from "@/components/ui";
import { safetyRules } from "@/data";

const iconMap = {
  Lock,
  AlertTriangle,
  GraduationCap,
  Scale,
  Heart,
};

export default function SafetyPage() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <Badge variant="rose" size="sm" className="mb-3">
            Use AI safely
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Five rules. Remember these.
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            AI is incredible. It's also new, uneven, and happy to lie to you
            with a straight face. These five rules cover most of the trouble.
          </p>
        </div>

        <div className="space-y-4">
          {safetyRules.map((rule, index) => {
            const Icon = iconMap[rule.icon as keyof typeof iconMap];
            return (
              <Card
                key={rule.id}
                variant="bordered"
                padding="lg"
                className="flex gap-4"
              >
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-100 to-violet-100 flex items-center justify-center">
                    <Icon size={18} className="text-rose-600" />
                  </div>
                  <div className="text-xs font-bold text-slate-400 mt-2">
                    0{index + 1}
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-1">
                    {rule.title}
                  </h2>
                  <p className="text-slate-600">{rule.body}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <Card variant="warm" padding="lg" className="mt-10">
          <h3 className="font-semibold text-slate-900 mb-2">A fast gut-check</h3>
          <p className="text-slate-700 mb-3">
            Before you paste something into AI, ask yourself:
          </p>
          <ul className="space-y-2 text-slate-700">
            <li>• Would I say this out loud on the bus? → Safe to paste.</li>
            <li>• Would this affect someone's grades, health, or money? → Double-check the output with a real source.</li>
            <li>• Does my course let me use AI for this? → If unsure, ask before submitting.</li>
            <li>• Is this a real crisis? → Talk to a real human first.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
