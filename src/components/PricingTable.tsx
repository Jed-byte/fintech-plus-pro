import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const PricingTable = () => {
  const plans = [
    {
      name: "Plus",
      subtitle: "Ideal for neobanks",
      price: "AED 3,700",
      transactions: "100,000 transactions",
      perTransaction: "AED 0.037 per transaction",
      additionalRate: "AED 0.073 per additional transaction",
      buttonText: "Get Now",
      buttonVariant: "outline" as const,
      icon: <Zap className="w-5 h-5" />,
      popular: false,
      features: [
        "Transaction enrichment (merchant names, logos, categories)",
        "99%+ data accuracy guarantee",
        "Regional geographic coverage",
        "Standard API response times",
        "24-hour data freshness",
        "Standard API rate limits",
        "3-month data retention",
        "Email support",
        "Unlimited API keys",
        "Unlimited CSV Uploads"
      ]
    },
    {
      name: "Pro",
      subtitle: "Ideal for digital wallets",
      price: "AED 6,500",
      transactions: "250,000 transactions",
      perTransaction: "AED 0.026 per transaction",
      additionalRate: "AED 0.073 per additional transaction",
      buttonText: "Get Now",
      buttonVariant: "default" as const,
      icon: <Star className="w-5 h-5" />,
      popular: true,
      features: [
        "Advanced transaction enrichment with extended metadata",
        "99.5%+ data accuracy guarantee",
        "Multi-regional geographic coverage",
        "Priority API response times (< 200ms)",
        "Real-time data freshness",
        "Enhanced API rate limits (5x standard)",
        "12-month data retention",
        "Priority email & chat support",
        "Unlimited API keys",
        "Unlimited CSV Uploads",
        "Advanced analytics dashboard",
        "Custom merchant categorization",
        "One hour onboarding call with IT Team"
      ]
    },
    {
      name: "Enterprise",
      subtitle: "Ideal for Banks, Super Apps, Large Fintechs",
      price: "Custom Pricing",
      transactions: "Unlimited transactions",
      perTransaction: "Volume-based pricing",
      additionalRate: "Negotiable rates",
      buttonText: "Contact Us",
      buttonVariant: "premium" as const,
      icon: <Crown className="w-5 h-5" />,
      popular: false,
      features: [
        "Premium transaction enrichment with AI-powered insights",
        "99.9%+ data accuracy guarantee with SLA",
        "Global geographic coverage",
        "Guaranteed API response times (< 100ms) with SLA",
        "Real-time data freshness with < 1s latency",
        "Unlimited API rate limits",
        "Unlimited data retention",
        "24/7 dedicated support hotline",
        "Unlimited API keys",
        "Unlimited CSV Uploads",
        "White-label analytics platform",
        "Custom merchant categorization & AI training",
        "Dedicated production & staging environments",
        "Dedicated solutions engineer",
        "Dedicated Customer Success Manager",
        "Custom integrations & API development",
        "On-premise deployment options",
        "Advanced security & compliance features"
      ]
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Choose Your Plan
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Powerful transaction enrichment solutions designed for modern financial services
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, index) => (
          <Card 
            key={plan.name} 
            className={`relative overflow-hidden shadow-card transition-all duration-300 hover:shadow-elegant ${
              plan.popular ? 'ring-2 ring-primary transform scale-105' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-primary-foreground text-sm font-medium text-center py-2">
                Most Popular
              </div>
            )}
            
            <CardContent className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
              {/* Plan Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent rounded-lg">
                  {plan.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="text-3xl font-bold text-foreground mb-2">{plan.price}</div>
                <div className="text-muted-foreground text-sm mb-1">{plan.transactions}</div>
                <div className="text-muted-foreground text-sm mb-1">{plan.perTransaction}</div>
                <div className="text-muted-foreground text-xs">{plan.additionalRate}</div>
              </div>

              {/* CTA Button */}
              <Button 
                variant={plan.buttonVariant} 
                className="w-full mb-8 h-12 text-base font-semibold"
              >
                {plan.buttonText}
              </Button>

              {/* Features List */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground mb-4">What's included:</h4>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Core Product Features Section */}
      <div className="bg-accent rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Core Product Features
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Transaction Enrichment</h3>
            <p className="text-sm text-muted-foreground">
              Comprehensive merchant names, logos, and intelligent categorization for all transactions
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Data Accuracy</h3>
            <p className="text-sm text-muted-foreground">
              Industry-leading accuracy guarantees with SLA-backed performance commitments
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Global Coverage</h3>
            <p className="text-sm text-muted-foreground">
              Extensive geographic coverage across multiple markets and regions worldwide
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Crown className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">API Performance</h3>
            <p className="text-sm text-muted-foreground">
              Lightning-fast API response times with guaranteed SLA and uptime commitments
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Real-time Data</h3>
            <p className="text-sm text-muted-foreground">
              Fresh data guarantees with real-time updates and minimal latency across all plans
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Enterprise Support</h3>
            <p className="text-sm text-muted-foreground">
              Dedicated support teams, onboarding assistance, and success management
            </p>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Trusted by Leading Financial Institutions
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join hundreds of neobanks, digital wallets, and financial institutions that rely on our 
          transaction enrichment platform to deliver superior customer experiences.
        </p>
      </div>
    </div>
  );
};

export default PricingTable;