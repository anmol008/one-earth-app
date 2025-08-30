import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Leaf, 
  BarChart3, 
  Calculator, 
  FileText, 
  Target, 
  Database, 
  Settings, 
  LogOut,
  Building2,
  TrendingUp,
  Home
} from "lucide-react";
import type { DemoUser } from "./LoginScreen";

interface NavigationProps {
  user: DemoUser;
  currentView: string;
  onViewChange: (view: string) => void;
  onLogout: () => void;
}

export const Navigation = ({ user, currentView, onViewChange, onLogout }: NavigationProps) => {
  const corporateNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'carbon-calc', label: 'Carbon Calculator', icon: Calculator },
    // { id: 'esg-reporting', label: 'ESG Reporting', icon: FileText },
    // { id: 'initiatives', label: 'Initiatives', icon: Target },
    // { id: 'data-sources', label: 'Data Sources', icon: Database },
  ];

  const financialNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'portfolio', label: 'Portfolio Analysis', icon: BarChart3 },
    { id: 'scenario', label: 'Scenario Modeling', icon: TrendingUp },
    { id: 'green-finance', label: 'Green Finance', icon: Leaf },
    { id: 'risk-assessment', label: 'Risk Assessment', icon: Target },
  ];

  const navItems = user.persona === 'corporate' ? corporateNavItems : financialNavItems;

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">OneEarth</span>
            </div>
            <Badge variant="secondary" className="hidden sm:inline-flex">
              {user.persona === 'corporate' ? 'Corporate' : 'Financial Institution'}
            </Badge>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentView === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onViewChange(item.id)}
                  className="flex items-center space-x-2"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Button>
              );
            })}
          </div>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage 
                    src={`https://images.unsplash.com/${user.avatar}?w=40&h=40&fit=crop&crop=face`} 
                    alt={user.name} 
                  />
                  <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  <p className="text-xs leading-none text-muted-foreground">{user.role}</p>
                  <p className="text-xs leading-none text-muted-foreground">{user.company}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onViewChange('settings')}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-3">
          <div className="flex space-x-1 overflow-x-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentView === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onViewChange(item.id)}
                  className="flex items-center space-x-1 whitespace-nowrap"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs">{item.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};