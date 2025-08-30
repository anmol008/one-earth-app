const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 px-6">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-earth bg-clip-text text-transparent">
            One Earth
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Building a sustainable future together
          </p>
        </div>
        
        <div className="w-16 h-1 bg-gradient-earth mx-auto rounded-full opacity-70"></div>
        
        <p className="text-sm text-muted-foreground italic">
          Ready to begin your journey
        </p>
      </div>
    </div>
  );
};

export default Index;
