import { useState } from "react";
import { LoginScreen, type DemoUser } from "@/components/LoginScreen";
import { Navigation } from "@/components/Navigation";
import { CorporateDashboard } from "@/components/CorporateDashboard";
import { FinancialDashboard } from "@/components/FinancialDashboard";
import { CarbonCalculator } from "@/components/CarbonCalculator";
import { ESGReporting } from "@/components/ESGReporting";
import { Initiatives } from "@/components/Initiatives";
import { DataSources } from "@/components/DataSources";
import { ScenarioPlanning } from "@/components/ScenarioPlanning";
import { PortfolioAnalysis } from "@/components/PortfolioAnalysis";
import { GreenFinance } from "@/components/GreenFinance";
import { RiskAssessment } from "@/components/RiskAssessment";
import { Settings } from "@/components/Settings";
import { FinancialModeling } from "@/components/FinancialModeling";
import { EnhancedESGReporting } from "@/components/EnhancedESGReporting";

const Index = () => {
  const [currentUser, setCurrentUser] = useState<DemoUser | null>(null);
  const [currentView, setCurrentView] = useState<string>('dashboard');

  const handleLogin = (user: DemoUser) => {
    setCurrentUser(user);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('dashboard');
  };

  if (!currentUser) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        if (currentUser.persona === 'corporate') {
          return <CorporateDashboard onBack={() => setCurrentView('dashboard')} />;
        }
        return <FinancialDashboard onBack={() => setCurrentView('dashboard')} />;
      
      case 'carbon-calc':
        return <CarbonCalculator />;
      
      case 'esg-reporting':
        return <EnhancedESGReporting />;
      
      case 'financial-modeling':
        return <FinancialModeling />;
      
      case 'initiatives':
        return <Initiatives />;
      
      case 'data-sources':
        return <DataSources />;
      
      case 'scenario':
        return <ScenarioPlanning />;
      
      
      case 'portfolio':
        return <PortfolioAnalysis />;
      
      case 'green-finance':
        return <GreenFinance />;
      
      case 'risk-assessment':
        return <RiskAssessment />;
      
      case 'settings':
        return <Settings />;
      
      default:
        if (currentUser.persona === 'corporate') {
          return <CorporateDashboard onBack={() => setCurrentView('dashboard')} />;
        }
        return <FinancialDashboard onBack={() => setCurrentView('dashboard')} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        user={currentUser}
        currentView={currentView}
        onViewChange={setCurrentView}
        onLogout={handleLogout}
      />
      {renderContent()}
    </div>
  );
};

export default Index;
