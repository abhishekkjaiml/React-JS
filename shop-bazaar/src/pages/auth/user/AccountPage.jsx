import {
  User,
  Package,
  Heart,
  MapPin,
  CreditCard,
  Settings,
  ShieldCheck,
  LogOut,
  ChevronRight,
  Edit3,
  Mail,
  Phone,
  CalendarDays,
} from "lucide-react";

import { useLogin } from "../../../context/login-context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {

  const { token, loginDispatch } = useLogin();

  const navigate = useNavigate()

  const [isAccountDropDownOpen, setIsAccountDropDownOpen] = useState(false);
  
    const onLoginClick = () => {
      if (!token.access_token) {
        setIsAccountDropDownOpen(false);
        navigate("/auth/login");
      } else {
        loginDispatch({
          type: "LOGOUT",
        });
  
        setIsAccountDropDownOpen(false);
        navigate("/auth/login");
      }
    };

  const accountMenu = [
    {
      id: 1,
      title: "My Orders",
      description: "Track, return or view your orders",
      icon: Package,
    },
    {
      id: 2,
      title: "My Wishlist",
      description: "View your saved products",
      icon: Heart,
    },
    {
      id: 3,
      title: "My Addresses",
      description: "Manage your delivery addresses",
      icon: MapPin,
    },
    {
      id: 4,
      title: "Payment Methods",
      description: "Manage your saved payment methods",
      icon: CreditCard,
    },
    {
      id: 5,
      title: "Account Settings",
      description: "Manage your account preferences",
      icon: Settings,
    },
    {
      id: 6,
      title: "Privacy & Security",
      description: "Manage your security and privacy",
      icon: ShieldCheck,
    },
  ];


  return (
    <div className="min-h-screen bg-background px-4 py-8 md:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-text-primary md:text-3xl">
            My Account
          </h1>

          <p className="mt-1 text-sm text-text-muted">
            Manage your profile, orders and account preferences
          </p>
        </div>

        {/* ================= PROFILE ================= */}

        <div className="mb-6 overflow-hidden rounded-2xl border border-border bg-background-soft">
          <div className="h-28 bg-primary/10 md:h-32" />

          <div className="px-5 pb-6 md:px-7">
            <div className="-mt-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              {/* PROFILE INFO */}

              <div className="flex items-end gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-background  text-2xl font-bold text-white shadow-md">
                  <img src="  https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" className="rounded-3xl" />
                </div>

                <div className="pb-1">
                  <h2 className="text-xl font-bold text-text-primary">
                    John Max
                  </h2>

                  <p className="text-sm text-text-muted">
                    Welcome back to your account
                  </p>
                </div>
              </div>

              {/* EDIT BUTTON */}

              <button className="flex w-fit items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold text-text-secondary transition hover:border-primary hover:bg-primary-light hover:text-primary">
                <Edit3 size={16} />
                Edit Profile
              </button>
            </div>

            {/* PROFILE DETAILS */}

            <div className="mt-7 grid gap-4 border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-xs text-text-muted">Email</p>
                  <p className="text-sm font-medium text-text-primary">
                    john@mail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-xs text-text-muted">Phone</p>
                  <p className="text-sm font-medium text-text-primary">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CalendarDays size={18} />
                </div>

                <div>
                  <p className="text-xs text-text-muted">Member Since</p>
                  <p className="text-sm font-medium text-text-primary">
                    January 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= ACCOUNT CONTENT ================= */}

        <div className="grid gap-6 lg:grid-cols-3">
          {/* ================= LEFT MENU ================= */}

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-background-soft p-4 md:p-5">
              <div className="mb-4">
                <h2 className="text-lg font-bold text-text-primary">
                  Account
                </h2>

                <p className="text-sm text-text-muted">
                  Manage your account and shopping preferences
                </p>
              </div>

              <div className="divide-y divide-border">
                {accountMenu.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.id}
                      className="group flex w-full items-center gap-4 py-4 text-left transition"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-background text-text-secondary transition group-hover:bg-primary/10 group-hover:text-primary">
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold text-text-primary transition group-hover:text-primary">
                          {item.title}
                        </h3>

                        <p className="mt-0.5 text-xs text-text-muted">
                          {item.description}
                        </p>
                      </div>

                      <ChevronRight
                        size={18}
                        className="shrink-0 text-text-light transition group-hover:translate-x-1 group-hover:text-primary"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="space-y-6">
            {/* QUICK STATS */}

            <div className="rounded-2xl border border-border bg-background-soft p-5">
              <h2 className="text-lg font-bold text-text-primary">
                Your Activity
              </h2>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-background p-4 text-center">
                  <p className="text-2xl font-bold text-primary">12</p>
                  <p className="mt-1 text-xs text-text-muted">Orders</p>
                </div>

                <div className="rounded-xl bg-background p-4 text-center">
                  <p className="text-2xl font-bold text-primary">8</p>
                  <p className="mt-1 text-xs text-text-muted">Wishlist</p>
                </div>

                <div className="rounded-xl bg-background p-4 text-center">
                  <p className="text-2xl font-bold text-primary">2</p>
                  <p className="mt-1 text-xs text-text-muted">Addresses</p>
                </div>

                <div className="rounded-xl bg-background p-4 text-center">
                  <p className="text-2xl font-bold text-primary">4</p>
                  <p className="mt-1 text-xs text-text-muted">Reviews</p>
                </div>
              </div>
            </div>

            {/* DEFAULT ADDRESS */}

            <div className="rounded-2xl border border-border bg-background-soft p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-text-primary">
                  Default Address
                </h2>

                <MapPin size={19} className="text-primary" />
              </div>

              <div className="mt-4 rounded-xl bg-background p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-text-primary">
                    Abhishek
                  </p>

                  <span className="rounded-full bg-success/10 px-2.5 py-1 text-[10px] font-semibold text-success">
                    DEFAULT
                  </span>
                </div>

                <p className="mt-2 text-xs leading-5 text-text-muted">
                  123 Main Street,
                  <br />
                  Konoha, Village Hidden in the Leaf
                  <br />
                  India - 202020
                </p>

                <p className="mt-3 text-xs font-medium text-text-secondary">
                  +91 98765 43210
                </p>
              </div>
            </div>

            {/* LOGOUT */}

            <button
              onClick={onLoginClick}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:border-red-300 hover:bg-red-100">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;