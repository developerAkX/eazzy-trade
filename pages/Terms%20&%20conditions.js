import styled from "@emotion/styled";
import { Card, Divider } from "@mui/material";
import InfoImgCard from "../components/ShowCards/InfoImgCard";
import InfoCard from "../components/ShowCards/InfoCard";
import TitleCard from "../components/ShowCards/TitleCard";
import Fade from "react-reveal/Fade";

export default function TermsAndConditions() {
  return (
    <Root>
      <TitleCard text="TERMS OF SERVICE " />
      <div className="content">
        {content.map((section, index) => (
          <TranslucentCard key={index} elevation={9}>
            <Fade bottom >
              <InfoCard
                title={section.title}
                description={section.description}
              />
            </Fade>
          </TranslucentCard>
        ))}
      </div>
    </Root>
  );
}


const Root = styled.div`
  display: grid;
  gap: 2rem;
  justify-content: start;
  justify-items: start;
  padding: 2rem;
  @media (max-width: 500px) {
    padding: 1rem;
  }
  margin-top: 4rem;
  z-index: 1000;
`;

const TranslucentCard = styled(Card)`
  max-width: 60rem;
  border-radius: 1.2rem;
  box-shadow: none;
  backdrop-filter: blur(8px);
  background: rgb(11, 22, 53, 0.7);
  color: rgb(160, 170, 180);
  z-index: 10;
  display: grid;
  align-items: stretch;
  gap: 2rem;
  padding: 2rem;
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const content = [
  {
    title: "",
    description: (
      <>
        Please note that the services (as defined below) are primarily for
        people who need a knowledge, educational course of technical and
        fundamental analysis foundations examinations in relation to stock
        market, and to encourage and upgrade their skill, knowledge and
        interest. Please also note that the information provided in the services
        (as defined below) is for informational purposes only and not intended
        to be a substitute for professional, investment advice, always consult
        with expert, or counsellors before using or performing any product,
        service, procedure, method or information discussed in the services.
        <br />
        <br />
        This educational course of technical and fundamental analysis are based
        on aymper markets author’s or owner’s personal observations and
        perspective. We are committed to provide course as highest quality as
        possible and making e-learning possibility on our website portal. Any
        person who is accessing or has accessed any information or data from the
        our website acknowledges that it may have spelling error or have less
        accuracy of particular information or incomplete information. The
        written content and graphical content on this website could include
        technical inaccuracies or typographical errors. Changes are periodically
        added to the information herein. Aymper markets may make improvements or
        modify full course at any time. Aymper markets makes no representations
        about the accuracy of the information contained in the web content and
        graphical content on this web site for any purpose.
        <br />
        <br />
        We do not provide any investment advice or sell tips. Aymper markets is
        only for use as educational purpose. Aymper markets is not responsible
        for any kind of profit or loss occurs from the stock market. User will
        be responsible for all profit and loss as all the investment decision of
        taking trades and opening orders be sole decision of user after
        completing the course.
      </>
    ),
  },
  {
    title: "TERMS AND CONDITION",
    description: (
      <>
        1). Before you register your account, to create an account, to be
        Eligible or to otherwise use this website, you must be at least eighteen
        (18) years old or the age of majority in your state or province of
        Residence or indian government allows age, whichever is greater
        <br />
        <br />
        2). We may modify our terms and condition at any time. Modifications
        Will be posted immediately, and your use of the site after such changes
        Have been posted will constitute your agreement to the modified terms of
        Use and all of the changes. You should read these terms of use each time
        You access, and prior to using, the site.
        <br />
        <br />
        3). Content on the site may be displayed solely for your personal,
        Non-commercial use. You may not reproduce copy, sell, resell or
        Otherwise exploit this site, or any portion of this site. No part of any
        Content, form or document may be reproduced in any form or incorporated
        Into any information retrieval system, electronically or mechanically.
        We reserve the right to refuse service and terminate accounts in our
        Sole discretion. When you sign up to become a member, you will also be
        Asked to choose a password. You are entirely responsible for maintaining
        The confidentiality of your password. You agree not to use the account,
        Username, password or any other personal details of another member at
        Any time or to disclose your password to any third party. You agree to
        Notify us immediately if you suspect any unauthorized use of your
        Account or access to your password within 24 hours. You are solely
        Responsible for any and all use of your account.
        <br />
        <br />
        4) you agree to use the site in a manner consistent with applicable laws
        And regulations. You agree not to use a false e-mail address,
        Impersonate any person or entity or otherwise mislead as to your
        Professional profile for the purpose of gaining access to opportunities.
        At our sole discretion, we may require proof that you meet these
        Conditions and have connection with account, you are required to submit
        Your age, gender, first name, last name, a valid email address and your
        Phone number to get certification, if you violate these terms we may,
        With or without prior warning, terminate your account without
        Compensation. This agreement is personal to you, and you may not assign
        Your rights or obligations to anyone. You are allowed to create one
        Account with us. Please follow our one account policy as creating more
        Than one account is a violation of our terms and condition.
        <br />
        <br />
        5). The content displayed on the website (www.Aymper.Com), including
        Text, graphics, logos, artwork, audio clips, trademarks, is the
        Exclusive property of aymper markets. And is protected by copyright and
        Registered.
        <br />
        <br />
        6). This educational course of technical and fundamental analysis are
        Based on aymper markets author’s personal observations and perspective.
        We are committed to provide course as highest quality as possible and
        Making e-learning possibility on our website portal. Any person who is
        Accessing or has accessed any information or data from the our website
        Acknowledges that it may have spelling error or have less accuracy of
        Particular information or incomplete information. The written content
        And graphical content on this website could include technical
        Inaccuracies or typographical errors. Changes are periodically added to
        The information herein. Aymper markets may make improvements or modify
        Full course at any time. Aymper markets makes no representations about
        The accuracy of the information contained in the web content and
        Graphical content on this web site for any purpose.
        <br />
        <br />
        7). Trading and investment are subject to market risk. All the
        Strategies and methodology in the course we deliver are for education
        Purpose only. The course in this website either whatever course we
        Provide are for education purpose. We don’t provide any investment
        Advice or sell tips. Aymper markets is not responsible for any kind of
        Profit or loss occurs from the stock market.
        <br />
        <br />
        8). By signing up on our website, you acknowledge that all information
        Contained on the site may be protected, in all forms and media, by one
        Or more valid copyrights, patents, trademarks, trade secrets, or other
        Proprietary rights, and that all such rights are owned by aymper
        Markets.
        <br />
        <br />
      </>
    ),
  },
  {
    title: "ACCEPTANCE OF TERMS",
    description: `“Aymper markets” provides its internet sites and the content, products and services offered on or through those sites, to you subject to the following terms of service (“tos”). Your use of the services in whole or in part constitutes your binding acceptance of these tos. If you do not agree to these tos, you should not use the services. Some services may be subject to additional posted rules, policies and terms. When you use those services, you and “aymper markets” shall be subject to those additional conditions, which are incorporated by reference into these tos (and, consequently, form part of your agreement with us). Other services may be governed by different usage terms. In the event of an inconsistency between these tos and any additional posted conditions or separate usage terms, the provisions of the additional conditions and/or separate usage terms shall control. Because we may modify all or any part of these tos from time to time without notice to you, you should check back often so you are aware of your current rights and responsibilities. Your continued use of a given service after changes to the tos have been published on that service constitutes your binding acceptance of the updated tos. If at anytime the tos are no longer acceptable to you, you should immediately cease all use of the services.`,
  },
  {
    title: "GENERAL RULES OF CONDUCT",
    description: (
      <>
        Your use of the services is subject to all applicable local, state,
        National and international laws and regulations, and you agree not to
        Violate such laws and regulations. In addition, you agree that:
        <br />
        <br />
        You will not interfere with another member’s use and enjoyment of the
        Services; you will not interfere with or disrupt the security measures
        Of the services; you will not interfere with or disrupt networks
        Connected to the services, and will comply with all regulations,
        Policies and procedures of such networks; and you will comply with india
        Law regarding the transmission of technical data exported from the
        India.
        <br />
        <br />
        You will not use the services to send or result in the transmission of
        Junk e-mail, chain letters, duplicative or unsolicited messages, or
        So-called “spamming”; harm minors in anyway; promote or generate revenue
        For any business or commercial purposes, whether or not for a charge or
        Through linking with any other web services or pages, unless authorized
        By “aymper markets”; impersonate any person or entity; intentionally or
        Unintentionally violate any applicable local, state, national or
        International law; “stalk” or otherwise harass another;
        <br />
        <br />
        You will not collect or store personal data about other users; and you
        Will not reproduce, modify, distribute or republish materials contained
        On the service (either directly or by linking) without our prior written
        Permission. You will not alter or remove any trademark, copyright or
        Other notice from copies of content. We reserve all rights in and title
        To all material. All trademarks, service marks, trade names, trade dress
        And logos appearing on the site are the property of their respective
        Owner aymper markets.
      </>
    ),
  },
  {
    title: "PAID COURSE CONTENT",
    description: (
      <>
        1). Premium package: premium package course is completely based on
        Online. Once user is paid for the package he has full lifetime access to
        The website portal where he can complete the course anytime and as many
        Times he wants. There will be numerous updates and modification to the
        Course content and it’s strategy and methodology and user will notify
        For the same.
        <br />
        <br />
        2). Super premium package: super premium package has all features of
        Premium package, but super premium package is more dedicated. Super
        Premium course is a seminar course where user need to be present at
        Classes physically. Once bought the super premium package course, user
        Need to wait for the seat availability. Super premium course date and
        Place will be decided by aymper markets only, once user paid, aymper
        Markets admin will personally call the user to book the date of course.
        If user cannot come to the course destination or want to complete the
        Course online, he can ask aymper markets admin for online webinar
        Instead of seminar at ask@aymper.Com
      </>
    ),
  },
  {
    title: "LIFETIME ACCESS TERMS",
    description: (
      <>
        Lifetime means completely lifetime, but there should be some user
        Activity from the date of starting subscription. Validity of premium and
        Super premium course will be for 3 years. User can extend their validity
        By being active online in the portal, even if it’s for once to keep his
        Account running. If there is no user activity for 3 years straight,
        Account will be temporarily disabled. For re-enabling the account again,
        User need to send email to ask@aymper.Com and it will be activated as
        Soon as possible for free, there will be no charges as we believe in one
        Time pay and get the service for lifetime. There will be no monthly
        Subscription. Once user is paid for premium or super premium package
        They will enjoy the service for lifetime.
        <br />
        <br />
        Lifetime access term is used for the website’s life not of users. Users
        Can enjoy the service till there are aymper markets. There will be
        Minimum 3 years of service guaranteed for each user. If there is any
        Sudden closure of the aymper markets services due to any issues in
        Future, in that case, user’s money will be refunded. Refund will be made
        Only for new user whose account is 1 month old, as the course can be
        Complete in 10 days, so user have a good time to complete.
      </>
    ),
  },
  {
    title: "CERTIFICATION POLICY",
    description: `We aymper markets are 9001 2015 iso certified company. Certificate of completion is provided to the user once they complete the premium or super premium course. The certificate can be issued in physical or digital form.`,
  },
  {
    title: "COURSE CONTENT COPYRIGHT",
    description: (
      <>
        Although we reserve the right to edit or modify course content prior to
        Their inclusion on the services. You also agree that you will not:
        <br />
        <br />
        Reproduce, distribute, republish or retransmit course content posted by
        Aymper markets. Users without the permission of “aymper markets”; take
        Any action that imposes an unreasonable or disproportionately large load
        On our infrastructure; or:
        <br />
        <br />
        Interfere or attempt to interfere with the proper working of the
        Services, any activities conducted on or through the services, or any
        Networks through which you access the services.
      </>
    ),
  },
  {
    title: "AYMPER MARKETS PROPRIETARY RIGHTS",
    description: (
      <>
        All services software, design, text, images, photographs, illustrations,
        Audio and video material, artwork, graphic material, database,
        Proprietary information and all copyrightable or otherwise legally
        Protectable elements of the services, including, but not limited to, the
        Selection, sequence and ‘look and feel’ and arrangement of items, and
        All trademarks, service marks and trade names, are the property of
        “aymper markets”, its subsidiaries, affiliates, licensors or suppliers
        And are legally protected, without limitation, under indian, as well as
        Applicable foreign, laws, regulations and treaties. The compilation of
        All content on www.Aymper.Com is the exclusive property of “aymper
        Markets”. You may not reproduce, modify, create derivative works from,
        Display, perform, publish, distribute, disseminate, broadcast or
        Circulate to any third party (including, without limitation, on or via a
        Third-party web site), or otherwise use, any materials contained on the
        Services without the express prior written consent of “aymper markets”
        Or its owner. In particular, you may not frame any material without the
        Express prior written consent of “aymper markets” or the material owner.
        You must not alter, delete or conceal any copyright or other notices
        Contained on the services, including notices on any material you
        Transmit, print or reproduce from the services. Any unauthorized or
        Prohibited use of any material, may subject you to civil liability or
        Criminal prosecution, or both, under applicable federal and state laws.
        You further agree not to access the service by any means other than
        Personal or non-commercial purpose through the interface that is
        Provided by “aymper markets” for use in accessing the service.
      </>
    ),
  },
  {
    title: "PROMOTIONS TERMS",
    description: `Some of our services may from time to time conduct promotions, including, but not limited to, educational seminar, social media site posting, physical appearance for educational training campaigns and meetings. Each promotion will have additional terms, conditions and rules which will be posted or otherwise made available to you and, for purposes of each promotion in which you participate, will be deemed incorporated by reference into these tos (and therefore a part of your agreement with “aymper markets”).`,
  },
  {
    title: "PAID AND NON-PAID BASED SERVICES",
    description: `All of our services not require paying a fee to access or using such service, there is free service too. As described in the specific conditions included where those of some services are offered are charged and paid once. You agree to pay fees and charges that you incur. Unless otherwise noted, all currency references are in indian rupees. We may, upon notice if required by applicable laws, at any time change the amount of, or basis for determining, any fee or charge, or institute new fees or charges. All fees and charges are payable in accordance with payment terms in effect at the time the fee or charge becomes payable. The premium package and super premium package is paid course and once paid, the service is for lifetime, unless some user violate our terms and condition and end up with service cancellation.`,
  },
  {
    title: "NO REFUND POLICY",
    description: (
      <>
        There is 2 paid service (premium and super premium) in aymper markets
        Along with 1 free service. Once user paid for any premium paid service,
        There will be no refund possible. Please go through aymper markets
        Website (www.Aymper.Com) to get the information what you are paying for
        Before subscribing to any paid package. User also must read our terms
        And condition before subscribing to any paid package.
        <br />
        <br />
        No refund if user does not like the content course or user wants to
        Exchange the premium package for super premium, vice-versa or user is
        Not satisfied or he doesn’t understand the content course. Refund will
        Be not possible in any case as both premium and super premium course
        Package subscription is for lifetime access.
      </>
    ),
  },
  {
    title: "REGISTRATIONS OBLIGATIONS AND SERVICE TERMINATION",
    description: (
      <>
        Our services require that you register with that service in order to
        Access our main content portal to use it. If such registration is
        Required, you agree that you will provide accurate information (such as
        Your real name and a valid email address) and will update your relevant
        Information if it becomes outdated. If you provide any information that
        Is, or that “aymper markets” in its reasonable discretion determines may
        Be, untrue, inaccurate, not current or incomplete, “aymper markets” has
        The right, without prior notice, to suspend or terminate your account
        And refuse any and all current or future use of the services (or any
        Portion thereof). For more detailed information about how we treat the
        Registration information you provide to us, please see our privacy
        Notice, which is incorporated by reference into these tos (and therefore
        A part of your agreement with us).
        <br />
        <br />
        We have the right, but not the obligation, to take any of the following
        Actions in our sole discretion at any time and for any reason without
        Giving you any prior notice:
        <br />
        <br />
        Restrict, suspend or terminate your access to all or any part of our
        Services;
        <br />
        <br />
        Deactivate or delete your accounts and all related information in your
        Dashboard.
        <br />
        <br />
        Establish general practices and limits concerning use of the services we
        May take any of the above actions for any legitimate business reason, as
        Determined by “aymper markets” in its sole discretion, including, but
        Not be limited to, (a) breaches or violations of the tos or other
        Incorporated agreements or guidelines, (b) requests by law enforcement
        Or other government agencies, (c) a request by you, (d) discontinuance
        Or material modification to the services (or any part thereof), and (e)
        Unexpected technical or security issues or problems. You agree that we
        Will not be liable to you or any third party for taking any of these
        Actions.
      </>
    ),
  },
];
