import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Leaf, BarChart3 } from "lucide-react";

interface PersonaSelectorProps {
  onSelectPersona: (persona: 'corporate' | 'financial') => void;
}

export const PersonaSelector = ({ onSelectPersona }: PersonaSelectorProps) => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-3">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold text-white">OneEarth</h1>
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Unified ESG & Sustainable Finance Intelligence Platform
          </p>
          <p className="text-white/70 mt-2">
            Choose your role to access personalized dashboards and insights
          </p>
        </div>

        {/* Persona Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Corporate Persona */}
          <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-elevated bg-gradient-card border-white/20">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-esg-environmental/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-esg-environmental/20 transition-colors">
                <Building2 className="w-8 h-8 text-esg-environmental" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Corporate</h3>
              <p className="text-muted-foreground mb-6">
                For sustainability officers, COOs, and corporate teams managing ESG initiatives
              </p>
              <div className="space-y-2 text-sm text-left mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-esg-environmental mr-3"></div>
                  Carbon accounting & emissions tracking
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-esg-social mr-3"></div>
                  ESG reporting & compliance
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-esg-governance mr-3"></div>
                  Sustainability initiatives management
                </div>
              </div>
              <Button 
                onClick={() => onSelectPersona('corporate')}
                className="w-full bg-esg-environmental hover:bg-esg-environmental/90 text-white"
              >
                Access Corporate Dashboard
              </Button>
            </CardContent>
          </Card>

          {/* Financial Institution Persona */}
          <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-elevated bg-gradient-card border-white/20">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-esg-social/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-esg-social/20 transition-colors">
                <TrendingUp className="w-8 h-8 text-esg-social" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Financial Institution</h3>
              <p className="text-muted-foreground mb-6">
                For ESG analysts, portfolio managers, and investment teams
              </p>
              <div className="space-y-2 text-sm text-left mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-esg-social mr-3"></div>
                  Portfolio emissions analysis
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-esg-governance mr-3"></div>
                  Climate risk assessment
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-esg-environmental mr-3"></div>
                  Sustainable finance tracking
                </div>
              </div>
              <Button 
                onClick={() => onSelectPersona('financial')}
                className="w-full bg-esg-social hover:bg-esg-social/90 text-white"
              >
                Access Financial Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features Preview */}
        <div className="mt-16 text-center">
          <h4 className="text-white mb-8">Platform Capabilities</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-white/80">
              <BarChart3 className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">Carbon Accounting</p>
            </div>
            <div className="text-white/80">
              <Building2 className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">ESG Reporting</p>
            </div>
            <div className="text-white/80">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">Risk Analysis</p>
            </div>
            <div className="text-white/80">
              <Leaf className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">Sustainability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};