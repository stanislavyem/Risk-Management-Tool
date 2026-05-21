"use client";
import Link from "next/link";
import "./info-create-event.scss";
import { linkPrivacy, linkTerms, requests } from "@/assets/js/consts";
import Input, { IInputFunctions } from "@/components/Input/Input";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "@/hooks/useAppContext";
import ModalMessage from "../ModalMessage/ModalMessage";
import Preloader from "@/components/Preloader/Preloader";

const AppFeatures = () => {
  return (
    <section id="features" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Comprehensive Risk Management
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform provides everything you need to assess, track, and
            manage insurance risks.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate">
            <div className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clipboard-list h-6 w-6 text-primary"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <path d="M12 11h4"></path>
                  <path d="M12 16h4"></path>
                  <path d="M8 11h.01"></path>
                  <path d="M8 16h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Risk Assessments</h3>
              <p className="text-muted-foreground">
                Complete 20-question assessments across Safety, Workers' Comp,
                and Fleet pillars with precise scoring.
              </p>
            </div>
          </div>
          <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate">
            <div className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chart-column h-6 w-6 text-primary"
                >
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Score Analytics</h3>
              <p className="text-muted-foreground">
                Real-time scoring with pillar breakdowns and overall risk
                ratings from High Risk to Strong/Low Risk.
              </p>
            </div>
          </div>
          <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate">
            <div className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users h-6 w-6 text-primary"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Action Management</h3>
              <p className="text-muted-foreground">
                Create, assign, and track action items with priority rankings
                based on risk severity.
              </p>
            </div>
          </div>
          <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate">
            <div className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shield h-6 w-6 text-primary"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Subcontractor Scoring</h3>
              <p className="text-muted-foreground">
                Evaluate subcontractor risk with dedicated controls for safety
                training and insurance verification.
              </p>
            </div>
          </div>
          <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate">
            <div className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-file-check h-6 w-6 text-primary"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="m9 15 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Document Management</h3>
              <p className="text-muted-foreground">
                Upload and organize safety programs, COIs, OSHA logs, and
                incident reports by category.
              </p>
            </div>
          </div>
          <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate">
            <div className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trending-up h-6 w-6 text-primary"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Role-Based Access</h3>
              <p className="text-muted-foreground">
                Secure multi-tenant platform with dedicated views for Carriers,
                Agents, and Insured organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCreateEvent: React.FC = (): JSX.Element => {
  const { modal } = useAppContext();
  const _email = useRef<IInputFunctions>(null);
  const [sending, setSending] = useState<boolean>(false);

  useEffect(() => {
    if (sending) {
      modal?.current?.openModal({
        name: "sendingPreloader",
        onClose: () => modal.current?.closeCurrent(),
        closable: false,
        children: <Preloader />,
      });
    } else {
      modal?.current?.closeName("sendingPreloader");
    }
  }, [sending]);

  const onEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fielsList = [_email];
    const errors: string[] = fielsList
      .map((el) => el.current?.getError()?.errorText)
      .filter((el) => el) as string[];
    if (errors.length > 0) {
      ///modal with errors
      modal?.current?.openModal({
        name: "error",
        onClose: () => modal.current?.closeCurrent(),
        children: (
          <ModalMessage
            texts={errors}
            button="OK"
            header="Errors found:"
            status="error"
            onClick={() => modal.current?.closeCurrent()}
          />
        ),
      });
      return;
    }

    const email = _email.current?.getValue();
    setSending(true);

    // mockup for sending to TG
    // const urlMessage= `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TG_TOKEN}/sendMessage`;
    // try { //send text to TG
    // 	const response = await fetch(urlMessage, {
    // 		method: 'POST',
    // 		headers: { 'Content-Type': 'application/json' },
    // 		body: JSON.stringify({ chat_id: process.env.NEXT_PUBLIC_TG_CHAT_ID, text: `New email: ${email}` })
    // 	})
    // 	if (!response.ok) {
    // 		console.log('Error while sending message using TG.', response);
    // 		return
    // 	}
    // 	console.log('Sent!');
    // } catch (e) {
    // 	console.log(`Something wrong while sending message to TG, try again later. Error: ${e}`)
    // }

    // const response: Response = await fetch(requests.sendEmail.url, {
    //     //signal: controller.signal,
    //     method: requests.sendEmail.method,
    //     headers: {
    //         "Content-Type": 'application/json',
    //     },
    // 	body: JSON.stringify({ email })
    // })

    //send data
    try {
      const urlMessage = `https://api.telegram.org/bot6373603798:AAG-9NK-LpX6D3wZOTIpsOTie3n0jB23Q_c/sendMessage`;
      const response = await fetch(urlMessage, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: -1002044689076,
          text: `New email: ${email}`,
        }),
      });

      if (!response.ok) {
        const result: { message: string } = await response.json();
        modal?.current?.openModal({
          name: "error",
          onClose: () => modal.current?.closeCurrent(),
          children: (
            <ModalMessage
              texts={[result.message]}
              button="OK"
              header="Errors occured:"
              status="error"
              onClick={() => modal.current?.closeCurrent()}
            />
          ),
        });
        setSending(false);
        return;
      }

      modal?.current?.openModal({
        name: "success",
        onClose: () => {
          modal.current?.closeCurrent();
          _email.current?.setValue("");
        },
        children: (
          <ModalMessage
            texts={["Your email has been sent"]}
            button="Close"
            header="Success"
            status="success"
            onClick={() => modal.current?.closeCurrent()}
          />
        ),
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      modal?.current?.openModal({
        name: "error",
        onClose: () => modal.current?.closeCurrent(),
        children: (
          <ModalMessage
            texts={[message]}
            button="OK"
            header="Errors occured:"
            status="error"
            onClick={() => modal.current?.closeCurrent()}
          />
        ),
      });
    }
    setSending(false);
  };

  return (
    <section className="section_create section_text">
      <div className="section__content">
        <div className="container_page container_content">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Start Automating Risk Today
            </h2>
            <p
              className="text-muted-foreground max-w-2xl mx-auto mb-8"
              style={{
                color: "gray",
              }}
            >
              Join insurance professionals who trust RiskCtrlPro for
              comprehensive risk assessment and management.
            </p>
            {/* <a href="/api/login">
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover-elevate active-elevate-2 bg-primary text-primary-foreground border border-primary-border min-h-10 rounded-md px-8"
                  data-testid="button-cta-bottom"
                >
                  Get Started Free
                </button>
              </a> */}
          </div>
          <form onSubmit={onEmailSubmit} className="flex items-end gap-3">
            <Input
              ref={_email}
              name="email"
              valueType="email"
              id="email"
              placeholder="Enter your email"
              description="Enter your email to subscribe"
            />
            <button
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 bg-primary text-primary-foreground border border-primary-border min-h-10 rounded-md px-8 gap-2"
              data-testid="button-get-started"
              type="submit"
              disabled={sending}
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trending-up h-4 w-4"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
            </button>
          </form>
        </div>
        {/* <AppFeatures/> */}
      </div>
    </section>
  );
};

export default InfoCreateEvent;
