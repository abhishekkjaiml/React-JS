/* SubscriptionPage.jsx Page Start */

import React, { useState } from "react";
import { Check, Crown, Sparkles, Zap, X } from "lucide-react";

const SubscriptionPage = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      id: "free",
      name: "Free",
      description: "Perfect for casual movie lovers.",
      monthlyPrice: "0",
      yearlyPrice: "0",
      icon: Sparkles,
      features: [
        "Watch selected movies",
        "HD streaming",
        "Limited movie collection",
        "Basic recommendations",
        "Single device streaming",
      ],
      unavailable: ["4K Ultra HD", "Ad-free streaming", "Multiple devices"],
      buttonText: "Current Plan",
    },
    {
      id: "premium",
      name: "Premium",
      description: "Everything you need for unlimited entertainment.",
      monthlyPrice: "199",
      yearlyPrice: "1,999",
      icon: Crown,
      popular: true,
      features: [
        "Unlimited movies & shows",
        "Full HD streaming",
        "Ad-free experience",
        "Download for offline viewing",
        "Watchlist & personalized recommendations",
        "Two devices simultaneously",
      ],
      unavailable: ["4K Ultra HD streaming"],
      buttonText: "Get Premium",
    },
    {
      id: "pro",
      name: "Pro",
      description: "The ultimate cinematic experience.",
      monthlyPrice: "299",
      yearlyPrice: "2,999",
      icon: Zap,
      features: [
        "Everything in Premium",
        "4K Ultra HD streaming",
        "HDR supported content",
        "Three devices simultaneously",
        "Priority access to new releases",
        "Premium support",
      ],
      unavailable: [],
      buttonText: "Go Pro",
    },
  ];

  return (
    <main className="subscription-page">
      {/* Hero Section */}
      <section className="subscription-hero">
        <div className="subscription-hero-glow subscription-hero-glow-one" />
        <div className="subscription-hero-glow subscription-hero-glow-two" />

        <div className="subscription-hero-content">
          <span className="subscription-label">
            <Sparkles size={15} />
            FilmAura Membership
          </span>

          <h1 className="subscription-title">
            Choose Your
            <span> Entertainment Plan</span>
          </h1>

          <p className="subscription-description">
            Unlock unlimited movies, premium features and an unforgettable
            streaming experience.
          </p>

          {/* Billing Toggle */}
          <div className="subscription-billing">
            <button
              type="button"
              className={
                billingCycle === "monthly"
                  ? "subscription-billing-btn active"
                  : "subscription-billing-btn"
              }
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>

            <button
              type="button"
              className={
                billingCycle === "yearly"
                  ? "subscription-billing-btn active"
                  : "subscription-billing-btn"
              }
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
              <span className="subscription-save">Save 15%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="subscription-plans">
        {plans.map((plan) => {
          const Icon = plan.icon;

          const price =
            billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

          return (
            <article
              key={plan.id}
              className={`subscription-card ${
                plan.popular ? "subscription-card-popular" : ""
              }`}
            >
              {plan.popular && (
                <div className="subscription-popular-badge">
                  <Crown size={14} />
                  Most Popular
                </div>
              )}

              <div className="subscription-card-top">
                <div className="subscription-icon">
                  <Icon size={22} />
                </div>

                <h2 className="subscription-plan-name">{plan.name}</h2>

                <p className="subscription-plan-description">
                  {plan.description}
                </p>
              </div>

              <div className="subscription-price">
                <span className="subscription-currency">₹</span>

                <span className="subscription-price-value">{price}</span>

                {plan.monthlyPrice !== "0" && (
                  <span className="subscription-price-period">
                    /{billingCycle === "monthly" ? "month" : "year"}
                  </span>
                )}
              </div>

              <button
                type="button"
                className={`subscription-plan-button ${
                  plan.popular ? "subscription-plan-button-primary" : ""
                }`}
              >
                {plan.buttonText}
              </button>

              <div className="subscription-divider" />

              <h3 className="subscription-features-title">What's included</h3>

              <ul className="subscription-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="subscription-check">
                      <Check size={13} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}

                {plan.unavailable.map((feature) => (
                  <li key={feature} className="subscription-feature-disabled">
                    <span className="subscription-cross">
                      <X size={13} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </section>

      {/* Bottom Note */}
      <section className="subscription-footer">
        <div className="subscription-footer-icon">
          <Sparkles size={18} />
        </div>

        <div>
          <h3>Stream without limits.</h3>
          <p>
            Cancel anytime. No long-term commitment. Your entertainment, your
            way.
          </p>
        </div>
      </section>
    </main>
  );
};

export default SubscriptionPage;

/* SubscriptionPage.jsx Page End */
