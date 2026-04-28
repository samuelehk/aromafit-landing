import SmartImage from "../components/SmartImage";
import { IMAGES } from "../images";

export default function Story() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x grid md:grid-cols-5 gap-16 items-center">
        <div className="md:col-span-3 space-y-7">
          <div className="label-eyebrow">A reader's story</div>
          <h2 className="h-display text-4xl md:text-5xl leading-tight">
            "I lost 4 kg without trying.
            <br />
            <span className="italic text-rosegold">
              I just stopped opening the fridge at 10 PM."
            </span>
          </h2>

          <div className="space-y-5 text-ink-soft text-lg leading-relaxed">
            <p>
              Rachel had tried everything. Intermittent fasting. The
              Mediterranean diet. Three different apps that counted the same
              calories. The one thing she could never quiet was the 9 PM walk
              to the kitchen — the one she swore she'd skip every morning.
            </p>
            <p>
              A friend texted her a photo of HUSH with one line:{" "}
              <em>"I know it sounds ridiculous. Try it anyway."</em> She
              laughed. She bought it.
            </p>
            <p>
              Night one, she pressed the button after dinner and didn't think
              much. Night four, her partner asked if she'd stopped snacking
              after dinner. <em>"You haven't been to the pantry in days."</em>
            </p>
            <p>
              Three weeks later, her jeans buttoned without the jump.
              <strong className="text-ink"> Down 4 kg.</strong> No diet. No
              gym. Just a button she pressed every evening at 9 PM.
            </p>
            <p className="text-ink font-medium italic font-display text-2xl">
              "It wasn't willpower. It was a quieter brain around food."
            </p>
          </div>

          <div className="text-xs text-ink-soft/80 pt-2">
            — Rachel K., Phoenix, AZ. Personal account shared with
            permission. Individual results vary.
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-cream-100">
            <SmartImage
              src={IMAGES.lifestyleSofa}
              alt="A woman relaxing on a sofa with a HUSH diffuser nearby"
              label="Lifestyle — sofa moment"
              className="w-full h-full"
              imgClassName="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
