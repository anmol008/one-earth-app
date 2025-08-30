import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Building2, TrendingUp, Leaf, Shield, Users, BarChart3 } from "lucide-react";

interface LoginScreenProps {
  onLogin: (user: DemoUser) => void;
}

export interface DemoUser {
  id: string;
  name: string;
  email: string;
  persona: 'corporate' | 'financial';
  company: string;
  role: string;
  avatar: string;
}

const demoUsers: DemoUser[] = [
  // Corporate Users
  // {
  //   id: 'corp-001',
  //   name: 'Sarah Chen',
  //   email: 'sarah.chen@novachem.com',
  //   persona: 'corporate',
  //   company: 'NovaChem Inc.',
  //   role: 'Chief Sustainability Officer',
  //   avatar: 'photo-1494790108755-2616b612b19d'
  // },
  {
    id: 'corp-002',
    name: 'Michael Rodriguez',
    email: 'michael.r@greentech.com',
    persona: 'corporate',
    company: 'GreenTech Solutions',
    role: 'Environmental Manager',
    avatar: 'photo-1472099645785-5658abf4ff4e'
  },
  {
    id: 'corp-003',
    name: 'Emily Johnson',
    email: 'e.johnson@sustainacorp.com',
    persona: 'corporate',
    company: 'SustainaCorp',
    role: 'ESG Director',
    avatar: 'photo-1438761681033-6461ffad8d80'
  },
  // Financial Users
  {
    id: 'fin-001',
    name: 'David Park',
    email: 'david.park@greencore.bank',
    persona: 'financial',
    company: 'Greencore Bank',
    role: 'ESG Risk Analyst',
    avatar: 'photo-1507003211169-0a1dd7228f2d'
  },
  // {
  //   id: 'fin-002',
  //   name: 'Lisa Thompson',
  //   email: 'lisa.t@ecofund.com',
  //   persona: 'financial',
  //   company: 'EcoFund Capital',
  //   role: 'Portfolio Manager',
  //   avatar: 'photo-1494790108755-2616b612b19d'
  // },
  // {
  //   id: 'fin-003',
  //   name: 'James Wilson',
  //   email: 'j.wilson@impactinvest.com',
  //   persona: 'financial',
  //   company: 'Impact Investments',
  //   role: 'Sustainable Finance Director',
  //   avatar: 'photo-1560250097-0b93528c311a'
  // }
];

export const LoginScreen = ({ onLogin }: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedUser, setSelectedUser] = useState<DemoUser | null>(null);
  const [showError, setShowError] = useState(false);

  const handleQuickLogin = (user: DemoUser) => {
    setSelectedUser(user);
    setEmail(user.email);
    setPassword('demo123');
    setTimeout(() => onLogin(user), 300);
  };

  const handleFormLogin = () => {
    const user = demoUsers.find(u => u.email === email);
    if (user && password === 'demo123') {
      onLogin(user);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const corporateUsers = demoUsers.filter(u => u.persona === 'corporate');
  const financialUsers = demoUsers.filter(u => u.persona === 'financial');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-esg-environmental/5 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Branding Section */}
        <div className="text-center lg:text-left space-y-6">
          <div className="flex items-center justify-center lg:justify-start space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">OneEarth</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-md">
            Unified ESG & Sustainable Finance Intelligence Platform
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <div className="flex items-center space-x-2">
              <Building2 className="w-5 h-5 text-esg-environmental" />
              <span className="text-sm">Carbon Accounting</span>
            </div>
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-esg-social" />
              <span className="text-sm">ESG Reporting</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm">Portfolio Analysis</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-sm">Risk Management</span>
            </div>
          </div>
        </div>

        {/* Login Section */}
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle>Welcome to OneEarth</CardTitle>
            <CardDescription>
              Choose your demo persona or sign in with credentials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="quick" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="quick">Quick Demo</TabsTrigger>
                <TabsTrigger value="form">Manual Login</TabsTrigger>
              </TabsList>
              
              <TabsContent value="quick" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium mb-3 block flex items-center">
                      <Building2 className="w-4 h-4 mr-2 text-esg-environmental" />
                      Corporate Personas
                    </Label>
                    <div className="grid gap-2">
                      {corporateUsers.map((user) => (
                        <Button
                          key={user.id}
                          variant="outline"
                          className="h-auto p-3 justify-start"
                          onClick={() => handleQuickLogin(user)}
                        >
                          <img
                            src={`https://images.unsplash.com/${user.avatar}?w=40&h=40&fit=crop&crop=face`}
                            alt={user.name}
                            className="w-8 h-8 rounded-full mr-3"
                          />
                          <div className="text-left">
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">{user.role} • {user.company}</div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* <div>
                    <Label className="text-sm font-medium mb-3 block flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-esg-social" />
                      Financial Institution Personas
                    </Label>
                    <div className="grid gap-2">
                      {financialUsers.map((user) => (
                        <Button
                          key={user.id}
                          variant="outline"
                          className="h-auto p-3 justify-start"
                          onClick={() => handleQuickLogin(user)}
                        >
                          <img
                            src={`https://images.unsplash.com/${user.avatar}?w=40&h=40&fit=crop&crop=face`}
                            alt={user.name}
                            className="w-8 h-8 rounded-full mr-3"
                          />
                          <div className="text-left">
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">{user.role} • {user.company}</div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div> */}
                </div>
              </TabsContent>

              <TabsContent value="form" className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  
                  {showError && (
                    <Alert variant="destructive">
                      <AlertDescription>
                        Invalid credentials. Use any email from demo personas with password "demo123"
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button onClick={handleFormLogin} className="w-full">
                    Sign In
                  </Button>
                  
                  <div className="text-center space-y-2">
                    <p className="text-sm text-muted-foreground">Demo Credentials:</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      <Badge variant="secondary" className="text-xs">Any demo email</Badge>
                      <Badge variant="secondary" className="text-xs">Password: demo123</Badge>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};