interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

let defferedPrompt: BeforeInstallPromptEvent | null = null;

window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();

    defferedPrompt = event;
  });

  window.addEventListener("appinstalled", () => {
    // Clear the defferedPrompt so it can be garbage collected
    defferedPrompt = null;
    // Optionally, send analytics event to indicate successful install
    console.log("PWA was installed");
  });

  document
    .querySelector<HTMLButtonElement>("#pwa-install-button")!
    .addEventListener("click", () => {
      if (!defferedPrompt) {
        return;
      }

      defferedPrompt.prompt();

      defferedPrompt.userChoice.then((choice) => {
        if (choice.outcome === "accepted") {
          console.log("user accepted the prompt");
        }
        defferedPrompt = null;
      });
    });
});

// change UI if not installed
if (window.matchMedia("(display-mode: standalone)").matches) {
  // do things here
  // set a variable to be used when calling something
  // e.g. call Google Analytics to track standalone use
}

const setupPWA = async () => {
  if (!("serviceWorker" in navigator)) {
    // service workers not supported
    return;
  }

  // if (import.meta.env.DEV) {
  //   return;
  // }

  try {
    const registration = await navigator.serviceWorker.register(
      "/Finances/beta/service-worker.js",
      {
        scope: "/Finances/beta",
      }
    );

    if ("periodicSync" in registration) {
      // @ts-ignore
      const tags = await registration.periodicSync.getTags();

      if (!tags.includes("content-sync")) {
        try {
          // @ts-ignore
          await registration.periodicSync.register("content-sync", {
            // An interval of one day.
            minInterval: 24 * 60 * 60 * 1000,
          });
        } catch (error) {}
      }
    } else {
      // always update
    }

    console.log("[service-worker] Registration Succeeded");
  } catch (error) {
    console.log(
      "%c[service-worker] Registration Failed \t",
      'background: #d14747; color: #f2f2f2; font-weight: "bold"',
      error
    );
  }

  // activate push notifications
};

setupPWA();

export {};
