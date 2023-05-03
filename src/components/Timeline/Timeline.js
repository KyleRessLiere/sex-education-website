import React, { useState } from "react";
function Timeline() {
  const timelineData = [
    {
      id: 1,
      date: "1913 The Chicago Experiment",
      quote:
        "Chicago public schools superintendent Ella Flagg Young fought for the first sexuality education programs in schools. The school board rescinded their permission the following year.",
      image: "Card1.jpeg",
    },
    {
      id: 2,
      date: "1914 The American Social Hygiene Association (ASHA) is created",
      quote:
        "The American Social Hygiene Association was created by the merger of the American Purity Alliance and the National Vigilance Association. This group was one of the earliest advocates for sex education programs.",
      image: "Card2.jpeg",
    },
    {
      id: 3,
      date: "1917. The “American Plan",
      quote:
        "During WWI, the fear of STIs among soldiers was rampant and the government began to launch what they called “social hygiene” programs. One program was the “American Plan,” where officials passed laws to outlaw sex work near military training camps and enabled forcible STI testing.",
      image: "Card3.jpeg",
    },
    {
      id: 4,
      date: "1918. The Chamberlain-Kahn Act passes.",
      quote:
        " The Chamberlain-Kahn Act provided $4 million dollars during the 1919-1920 school year to train teachers about STIs so they could train students. This was the first federally funded initiative for sex education in the U.S.",
      image: "Card4.jpeg",
    },
    {
      id: 5,
      date: "1920s. Attitudes about sex education begin to change",
      quote:
        "During the 1920s, attitudes about sexuality began to loosen. The U.S. Public Health Service distributed sex education materials to schools. Young women began to receive formal sex education in the form of “marital adjustment” classes.",
      image: "Card5.jpeg",
    },
    {
      id: 6,
      date: "1930s. Marital Adjustment Classes spread to college campuses",
      quote:
        "By the 1930s, marital adjustment classes continued to spread across college campuses and discussion of interracial marriages is introduced in class. However, racism persists in sex education.",
      image: "Card6.jpeg",
    },
    {
      id: 7,
      date: "1940. Sexuality Education becomes an “urgent need.”",
      quote:
        "The U.S. Public Health Service declared sexuality education in public schools an “urgent need” during WWII, when public concern about STIs among soldiers began to increase once more.",
      image: "Card7.jpeg",
    },
    {
      id: 8,
      date: "1953. ASHA launches family life education programs",
      quote:
        "By the 1950s, sexual attitudes had once again begun to change. The American Social Hygiene Association began to raise funds from charitable organizations to develop and introduce Family Life Education programs in classes. They stressed family and group discussions.",
      image: "Card8.jpeg",
    },
    {
      id: 9,
      date: "1964. SIECUS is formed.",
      quote:
        "The 1960s marked the “second sexual revolution.” Dr. Mary Steichen Calderone created the Sex Information and Education Council of the US. SEICUS focused on sex positivity and education.",
      image: "Card9.jpeg",
    },
    {
      id: 10,
      date: "1968. Conservatives push back",
      quote:
        "In 1968, Gordon Drake, a leader in two conservative organizations wrote an article called “Black Board Power: NEA Threat to America.” He warned that the NEA and SIECUS were turning kids away from religion, which led to national advocacy against his message.",
      image: "Card10.jpeg",
    },
    {
      id: 11,
      date: "1981. Adolescent Family Life Act passes",
      quote:
        "After the cultural revolution of the 1970s, the Adolescent Family Life was enacted during the Reagan administration. The law provided funding for public and nonprofit private organizations to counsel youth about abstinence until marriage.",
      image: "Card11.jpeg",
    },
    {
      id: 12,
      date: "1981. The HIV/AIDS crisis increases sex education efforts.",
      quote:
        "The HIV/AIDS crisis of the 1980s led to increased efforts to put sex education curricula in school. The U.S. public health service launched one of the largest campaigns in American history to educate public",
      image: "Card12.jpeg",
    },
    {
      id: 13,
      date: "1990. SIECUS drafted the Guidelines.",
      quote:
        "The debate over what should be included in sex education continued. SIECUS assembled a task force to draft the first Guidelines for Comprehensive Sexuality Education.",
      image: "Card13.jpeg",
    },
    {
      id: 14,
      date: "1995. Schools launch condom availability programs",
      quote:
        "Some schools have made condoms available to students to reduce teen pregnancy and STDs. By 1995, CAPS were operating in 431 public schools.",
      image: "Card14.jpeg",
    },
    {
      id: 15,
      date: "1996. Personal Responsibility & Work Opportunity Reconciliation Act",
      quote:
        "The 1996 Personal Responsibility & Work Opportunity Reconciliation Act (also called the 1996 Welfare Act) was a step backwards for educators. The program included $50 million a year appropriation for five years to govern abstinence-only education.",
      image: "Card15.jpeg",
    },
    {
      id: 16,
      date: "2000. Community-Based Abstinence Education program",
      quote:
        "To further abstinence-only education efforts, the government launched a Community-Based Abstinence Education (CBAE) program. The program was originally funded at $20 million, which would be granted to community organizations to fund abstinence-only education.",
      image: "Card16.jpeg",
    },
    {
      id: 17,
      date: "2007. Studies published show failures of abstinence education",
      quote:
        "In 2007, a congressionally mandated study conducted by Mathematica showed that abstinence-only education was actually damaging to students. A 2007 meta-analysis of 13 abstinence-only programs showed that they failed to reduce unprotected sex and number of sexual partners.",
      image: "Card17.jpeg",
    },
    {
      id: 18,
      date: "2008. The Future of Sex Education Initiative is launched",
      quote:
        "Advocates for Health Youth, Answer, and SIECUS created the Future of Sex Education Initiative (FoSE) with private funding. The FoSE published the National Sexuality Education Standards in 2012, the National Teacher Preparation Standards, and the National Professional Development Standards",
      image: "Card18.jpeg",
    },
    {
      id: 19,
      date: "2010. Congress creates the Office of Adolescent Health",
      quote:
        "In 2010, Congress authorized the creation of the Office of Adolescent Health within the Department of Health and Human Services to promote adolescent health. The OAH administered the Teen Pregnancy Prevention Program, which funded evidence-based sex education initiatives.",
      image: "Card19.jpeg",
    },
    {
      id: 20,
      date: "2012. Congress passes the “Competitive Abstinence Education” (CAE) Grant Program",
      quote:
        "Abstinence-only education programs gained traction again in 2012 with the Competitive Abstinence Education Programs, which was then rebranded as the “Sexual Risk Avoidance Education” program in 2015. The focus was, once again, to federally fund abstinence-only education.",
      image: "Card20.jpeg",
    },
    {
      id: 21,
      date: "2012. The National Abstinence Education Association rebrands.",
      quote:
        "The NAEA changed its name to Ascend in 2012, and renewed their campaign for students to avoid sexual activity until marriage. They also marketed their programs as poverty prevention, stating that early pregnancy inhibited social mobility.",
      image: "Card21.jpeg",
    },
    {
      id: 22,
      date: "2015. The Every Student Succeeds Act (ESSA)",
      quote:
        "The Every Student Succeeds Act was signed into law in 2015, which provided funding for a variety of education programs, including sex education. The law allowed states to use federal funds for both comprehensive sex education and abstinence-only programs.",
      image: "Card22.jpeg",
    },
    {
      id: 23,
      date: "2017. The Teen Pregnancy Prevention Program faces funding challenges",
      quote:
        "In 2017, the Trump administration attempted to cut funding for the Teen Pregnancy Prevention Program (TPPP). However, after multiple lawsuits, federal courts ruled that the funding cuts were unlawful, and the program continued to receive funding.",
      image: "Card23.jpeg",
    },
    {
      id: 24,
      date: "2018. Advances in LGBTQ+ inclusive sex education",
      quote:
        "Some states and school districts began to implement LGBTQ+ inclusive sex education programs, focusing on the unique needs and experiences of LGBTQ+ students. These programs aimed to reduce health disparities and promote a more inclusive learning environment.",
      image: "Card24.jpeg",
    },
    {
      id: 25,
      date: "2020. The COVID-19 pandemic impacts sex education",
      quote:
        "The COVID-19 pandemic disrupted traditional classroom education, including sex education. In response, many organizations and educators adapted by offering virtual sex education resources and programs to ensure students continued to receive accurate and comprehensive information.",
      image: "Card25.jpeg",
    },
    {
      id: 26,
      date: "2021. The fight for comprehensive sex education continues",
      quote:
        "As of 2021, the fight for comprehensive, inclusive, and evidence-based sex education continues in the United States. Advocates and educators work tirelessly to ensure that all students have access to the information they need to make informed decisions about their sexual health and relationships.",
      image: "Card26.jpeg",
    },
    {
      id: 27,
      date: "2021. California mandates ethnic studies, including LGBTQ+ history",
      quote:
        "In 2021, California became the first state to require ethnic studies, including LGBTQ+ history, as a graduation requirement for high school students. The new curriculum aims to promote understanding, tolerance, and inclusion.",
      image: "Card27.jpeg",
    },
    {
      id: 28,
      date: "2021. The Biden administration supports comprehensive sex education",
      quote:
        "Under the Biden administration, support for comprehensive sex education and reproductive health services has increased. The administration has expressed commitment to evidence-based sex education and the importance of addressing health disparities faced by marginalized communities.",
      image: "Card28.jpeg",
    },
    {
      id: 29,
      date: "2021. State-level battles for sex education continue",
      quote:
        "In 2021, state-level battles over sex education policies and funding continued, with some states pushing for more comprehensive and inclusive programs, while others advocate for abstinence-only or limited sex education.",
      image: "Card29.jpeg",
    },
    {
      id: 30,
      date: "2021. Digital resources expand access to sex education",
      quote:
        "As digital technology continues to advance, access to accurate and comprehensive sex education resources has expanded. Online platforms, apps, and social media have allowed educators and organizations to reach a wider audience and provide essential information on sexual health and relationships.",
      image: "Card30.jpeg",
    },
    {
      id: 31,
      date: "2022-2023. The ongoing fight for comprehensive sex education",
      quote:
        "The fight for comprehensive, inclusive, and evidence-based sex education continues in the United States, with advocates and educators working to ensure all students have access to the information and resources they need to make informed decisions about their sexual health and relationships.",
      image: "Card31.jpeg",
    },
    {
      id: 32,
      date: "2022. New York mandates comprehensive sex education",
      quote:
        "In 2022, New York passed legislation requiring all public schools to provide age-appropriate, medically accurate, and inclusive comprehensive sex education. The law aims to promote healthy relationships, consent, and diversity.",
      image: "Card32.jpeg",
    },
    {
      id: 33,
      date: "2022. Virginia expands sex education curriculum",
      quote:
        "Virginia expanded its sex education curriculum in 2022 to include topics such as consent, healthy relationships, and LGBTQ+ inclusivity. The updated curriculum emphasizes the importance of providing students with a comprehensive understanding of sexual health.",
      image: "Card33.jpeg",
    },
    {
      id: 34,
      date: "2023. Growing support for LGBTQ+ inclusive sex education",
      quote:
        "In 2023, the movement for LGBTQ+ inclusive sex education continued to gain momentum as more states and school districts adopted comprehensive curricula that address the needs and experiences of LGBTQ+ students.",
      image: "Card34.jpeg",
    },
  ];
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <header>
        <div className="container text-center">
          <h1 className="title">Sex Timeline</h1>
        </div>
      </header>
      <section className="timeline">
        <div className="container">
          {timelineData.map((item) => (
            <div className="timeline-item" key={item.id}>
              <div className="timeline-img"></div>
              <div
                className={`timeline-content ${
                  item.isCard
                    ? "timeline-card js--fadeInRight"
                    : "js--fadeInLeft"
                }`}
              >
                {item.title && <h2>{item.title}</h2>}
                {item.date && <div className="date">{item.date}</div>}
                {item.description && <p>{item.id}</p>}
                {item.quote && <blockquote>{item.quote}</blockquote>}
                <a className="bnt-more" onClick={handleModal}>
                  More
                </a>

                {showModal && (
                  <div className="timeline-modal">
                    <div className="modal-content">
                      <span className="close-button" onClick={handleModal}>
                        &times;
                      </span>
                      <p>Modal content goes here...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Timeline;
