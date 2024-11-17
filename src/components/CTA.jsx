import { Users, CheckCircle, Star, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => (
  <div className="w-full bg-transparent py-0">
    <div className="container mx-auto">
      <div className="flex flex-col text-center py-12 gap-8 items-center">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-semibold text-white">
            Help Us Grow the HUDC
          </h3>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed tracking-tight text-white max-w-xl flex items-center gap-3 py-2">
              <CheckCircle className="w-6 h-6 text-purple-500" /> 
              <span>Supporting us means investing in the future of tech talent.</span>
            </p>
            <p className="text-lg leading-relaxed tracking-tight text-white max-w-xl flex items-center gap-3 py-2">
              <Star className="w-6 h-6 text-purple-500" /> 
              <span>Contribute through resources or event sponsorship .</span>
            </p>
            <p className="text-lg leading-relaxed tracking-tight text-white max-w-xl flex items-center gap-3 py-2">
              <Briefcase className="w-6 h-6 text-purple-500" /> 
              <span>Want to collaborate or sponsor? Contact us to explore opportunities.</span>
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <Button
            className="gap-4 bg-purple-500 text-black hover:bg-purple-700"
            onClick={() => {
              window.location.href =
                "mailto:kalebalebachew4@gmail.com?subject=Support%20HUDC&body=I%20would%20like%20to%20support%20the%20HUDC%20community.";
            }}
          >
            Support Us <Users className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);
