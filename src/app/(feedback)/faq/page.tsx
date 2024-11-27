import React from "react";

export default function Page() {
  return (
    <main>
      <div className="legal container prose prose-sm lg:prose-xl md:prose-lg">
        <h2>FAQ</h2>
        <p>
          Welcome to our Frequently Asked Questions! We`re here to ensure your
          experience is smooth, fun, and easy. Got a question? We`ve got
          answers!
        </p>
        <div className="flex flex-col gap-5">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-semibold text-pretty text-primary">
              What is Hoople?
            </div>
            <div className="collapse-content">
              <p>
                Hoople is your ultimate platform to create interactive and
                immersive scavenging hunts. Whether you`re looking to make a fun
                and competitive race, a real-time leaderboard, or an engaging
                way to raise awareness for your campaign, we`re here to help you
                get things done, your way!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-semibold text-pretty text-primary">
              How does it work?
            </div>
            <div className="collapse-content">
              <p>
                It`s as easy as 1-2-3! Want to create an event with Hoople?
                Simply
                <a href="https://cms.hoople.co.id/signup" target="_blank">
                  sign up
                </a>
                , create events, and publish and join the fun. Want the full
                scoop? Check out our <a>guide page</a> to become a pro in no
                time! Want to join the event? Simply download our app on the{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.optimind.hoople&pcampaignid=web_share"
                  target="_blank"
                >
                  Google Play Store
                </a>{" "}
                or on the{" "}
                <a href="" target="_blank">
                  App Store
                </a>
                .
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-semibold text-pretty text-primary">
              Is it free to use?
            </div>
            <div className="collapse-content">
              <p>
                Absolutely! Our mobile app is free for all event participants to
                dive into the action. If you`re an event master looking to
                create amazing events, we`ve got subscription plans to unlock
                advanced features and make your events unforgettable.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-semibold text-pretty text-primary">
              What types of events can I join or create?
            </div>
            <div className="collapse-content">
              <p>
                You can dive into everything from team-building activities to
                scavenger hunts, and more! The sky`s the limit. Plus, with our
                event customization tools, you can make any event uniquely
                yours.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-semibold text-pretty text-primary">
              How do I contact customer support?
            </div>
            <div className="collapse-content">
              <p>
                We`ve got your back! If you run into any issues, our support
                team is just a click or tap away. Head over to the{" "}
                <a href="./contact-us" target="_blank">{`"Contact Us"`}</a>{" "}
                section below, or shoot us an email at hoople.team@gmail.com
                .We`re here to help!
              </p>
            </div>
          </div>
          <div>
            <p>
              <strong>Still have questions?</strong>
              <br /> Still have questions? No worries! If we didn`t cover
              something, just let us know. We`re all about making your
              experience a breeze.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
