/* HelpSupportPage.jsx Page Start */

import React, { useState } from "react";
import {
  Search,
  MessageCircle,
  Mail,
  PlayCircle,
  CreditCard,
  UserRound,
  ShieldCheck,
  ChevronDown,
  HelpCircle,
  Smartphone,
  Wifi,
} from "lucide-react";

const HelpSupportPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const helpCategories = [
    {
      icon: PlayCircle,
      title: "Streaming & Playback",
      description:
        "Problems with watching movies or TV shows?",
    },
    {
      icon: UserRound,
      title: "Account & Profile",
      description:
        "Manage your account, profile and preferences.",
    },
    {
      icon: CreditCard,
      title: "Plans & Billing",
      description:
        "Need help with subscriptions or payments?",
    },
    {
      icon: ShieldCheck,
      title: "Privacy & Security",
      description:
        "Learn about account security and privacy.",
    },
  ];

  const commonIssues = [
    {
      icon: Wifi,
      title: "Video keeps buffering",
      description:
        "Check your internet connection and try lowering the streaming quality.",
    },
    {
      icon: Smartphone,
      title: "Watching on another device",
      description:
        "Sign in with the same FilmAura account on your supported device.",
    },
    {
      icon: CreditCard,
      title: "Payment issue",
      description:
        "Check your payment details or try another available payment method.",
    },
  ];

  const faqs = [
    {
      question: "How do I watch a movie on FilmAura?",
      answer:
        "Open the movie you want to watch and select the Watch Now button. You will be taken to the streaming page where you can start playback.",
    },
    {
      question: "How can I add a movie to my watchlist?",
      answer:
        "Open the movie or TV show details page and click the Add to Watchlist button. You can access your saved content from your Watchlist.",
    },
    {
      question: "How do I change my subscription plan?",
      answer:
        "Go to the Plans section and choose the subscription plan that best suits your needs. Follow the available steps to update your plan.",
    },
    {
      question: "Why is my video buffering?",
      answer:
        "Buffering can happen because of a slow or unstable internet connection. Try checking your connection, refreshing the page, or selecting a lower streaming quality.",
    },
    {
      question: "Can I use FilmAura on multiple devices?",
      answer:
        "Device availability depends on your current subscription plan. Check the Plans page to see the supported number of simultaneous devices.",
    },
    {
      question: "How can I contact FilmAura support?",
      answer:
        "You can contact our support team through the email or live support options available on this page.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="help-support-page">
      {/* =====================================================
         HERO
      ===================================================== */}

      <section className="help-support-hero">
        <div className="help-support-glow help-support-glow-one" />
        <div className="help-support-glow help-support-glow-two" />

        <div className="help-support-hero-content">
          <span className="help-support-label">
            <HelpCircle size={15} />
            Help Center
          </span>

          <h1 className="help-support-title">
            How can we
            <span> help you?</span>
          </h1>

          <p className="help-support-description">
            Find answers, troubleshoot common problems,
            or get in touch with the FilmAura support team.
          </p>

          <div className="help-support-search">
            <Search size={19} />

            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(event) =>
                setSearchQuery(event.target.value)
              }
            />
          </div>
        </div>
      </section>

      {/* =====================================================
         QUICK HELP
      ===================================================== */}

      <section className="help-support-section">
        <div className="help-support-section-heading">
          <span>Quick Help</span>
          <h2>What do you need help with?</h2>
        </div>

        <div className="help-support-categories">
          {helpCategories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                type="button"
                key={category.title}
                className="help-support-category"
              >
                <div className="help-support-category-icon">
                  <Icon size={21} />
                </div>

                <div className="help-support-category-content">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>

                <ChevronDown
                  size={17}
                  className="help-support-category-arrow"
                />
              </button>
            );
          })}
        </div>
      </section>

      {/* =====================================================
         COMMON ISSUES
      ===================================================== */}

      <section className="help-support-section">
        <div className="help-support-section-heading">
          <span>Troubleshooting</span>
          <h2>Common issues</h2>
        </div>

        <div className="help-support-issues">
          {commonIssues.map((issue) => {
            const Icon = issue.icon;

            return (
              <article
                key={issue.title}
                className="help-support-issue"
              >
                <div className="help-support-issue-icon">
                  <Icon size={19} />
                </div>

                <div>
                  <h3>{issue.title}</h3>
                  <p>{issue.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =====================================================
         FAQ
      ===================================================== */}

      <section className="help-support-section help-support-faq-section">
        <div className="help-support-section-heading">
          <span>FAQ</span>
          <h2>Frequently asked questions</h2>
        </div>

        <div className="help-support-faq-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={faq.question}
                className={`help-support-faq ${
                  openFaq === index
                    ? "help-support-faq-open"
                    : ""
                }`}
              >
                <button
                  type="button"
                  className="help-support-faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>

                  <ChevronDown
                    size={18}
                    className="help-support-faq-icon"
                  />
                </button>

                <div className="help-support-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="help-support-no-results">
              <Search size={24} />
              <p>
                No results found for "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
         CONTACT SUPPORT
      ===================================================== */}

      <section className="help-support-contact">
        <div className="help-support-contact-icon">
          <MessageCircle size={23} />
        </div>

        <div className="help-support-contact-content">
          <span>Still need help?</span>

          <h2>
            Our support team is here for you.
          </h2>

          <p>
            Can't find what you're looking for?
            Reach out to us and we'll help you get
            back to enjoying FilmAura.
          </p>
        </div>

        <div className="help-support-contact-actions">
          <button
            type="button"
            className="help-support-contact-button"
          >
            <MessageCircle size={16} />
            Contact Support
          </button>

          <button
            type="button"
            className="help-support-email-button"
          >
            <Mail size={16} />
            Email Us
          </button>
        </div>
      </section>
    </main>
  );
};

export default HelpSupportPage;

/* HelpSupportPage.jsx Page End */