import React, { useState } from "react";
function Timeline() {
  const timelineData = [
    {
      id: 1,
      date: "1913 The Chicago Experiment",
      quote:
        "Chicago public schools superintendent Ella Flagg Young fought for the first sexuality education programs in schools. The school board rescinded their permission the following year.",
      image: "Card1.jpeg",
      more: "In 1913, Ella Flagg Young, the superintendent of the Chicago public schools, made a groundbreaking effort to introduce sexuality education programs in schools. She believed that students needed to be equipped with accurate and helpful information about sex and relationships in order to make informed decisions in their lives. However, her efforts were met with resistance and the school board revoked their permission the following year. Despite this setback, Young's advocacy paved the way for future efforts to introduce comprehensive sex education programs in schools.",
    },
    {
      id: 2,
      date: "1914 The American Social Hygiene Association (ASHA) is created",
      quote:
        "The American Social Hygiene Association was created by the merger of the American Purity Alliance and the National Vigilance Association. This group was one of the earliest advocates for sex education programs.",
      image: "Card2.jpeg",
      more: "The American Social Hygiene Association (ASHA) was established in 1914 through the merger of the American Purity Alliance and the National Vigilance Association. ASHA was one of the earliest organizations to advocate for sex education programs in schools, as well as public campaigns to promote sexual health and prevent sexually transmitted infections (STIs). The organization believed that sex education was crucial for preventing the spread of STIs and promoting healthy relationships.",
    },
    {
      id: 3,
      date: "1917. The “American Plan",
      quote:
        "During WWI, the fear of STIs among soldiers was rampant and the government began to launch what they called “social hygiene” programs. One program was the “American Plan,” where officials passed laws to outlaw sex work near military training camps and enabled forcible STI testing.",
      image: "Card3.jpeg",
      more: "During World War I, the fear of sexually transmitted infections (STIs) among soldiers was widespread, and the government launched what were known as 'social hygiene' programs to combat the problem. One such program was the 'American Plan', which involved passing laws to outlaw sex work near military training camps and allowing for the forcible testing of individuals suspected of having an STI. While this effort was motivated by concerns for public health, it was also rooted in moralistic attitudes towards sex work and sexual behavior.",
    },
    {
      id: 4,
      date: "1918. The Chamberlain-Kahn Act passes.",
      quote:
        "The Chamberlain-Kahn Act provided $4 million dollars during the 1919-1920 school year to train teachers about STIs so they could train students. This was the first federally funded initiative for sex education in the U.S.",
      image: "Card4.jpeg",
      more: "The Chamberlain-Kahn Act, passed in 1918, provided $4 million during the 1919-1920 school year to train teachers about sexually transmitted infections (STIs) so they could in turn educate their students. This was the first federally funded initiative for sex education in the United States, and it aimed to equip teachers with the knowledge and resources needed to teach students about sexual health and relationships.",
    },
    {
      id: 5,
      date: "1920s. Attitudes about sex education begin to change",
      quote:
        "During the 1920s, attitudes about sexuality began to loosen. The U.S. Public Health Service distributed sex education materials to schools. Young women began to receive formal sex education in the form of “marital adjustment” classes.",
      image: "Card5.jpeg",
      more: 'The 1920s marked a turning point in attitudes about sex education in the United States. The U.S. Public Health Service distributed sex education materials to schools, and formal sex education programs, such as "marital adjustment" classes, began to emerge. However, these programs were typically limited to young women and focused primarily on preparing them for marriage rather than promoting sexual health and wellbeing for all individuals.',
    },
    {
      id: 6,
      date: "1930s. Marital Adjustment Classes spread to college campuses",
      quote:
        "By the 1930s, marital adjustment classes continued to spread across college campuses and discussion of interracial marriages is introduced in class. However, racism persists in sex education.",
      image: "Card6.jpeg",
      more: "During the 1930s, marital adjustment classes continued to gain popularity and spread to college campuses, with a focus on preparing young people for marriage. However, racism persisted in sex education, and discussions of interracial marriages were often framed in a negative light, perpetuating harmful stereotypes and discrimination.",
    },
    {
      id: 7,
      date: "1940. Sexuality Education becomes an “urgent need.”",
      quote:
        "The U.S. Public Health Service declared sexuality education in public schools an “urgent need” during WWII, when public concern about STIs among soldiers began to increase once more.",
      image: "Card7.jpeg",
      more: 'During World War II, public concern about sexually transmitted infections (STIs) among soldiers increased, prompting the U.S. Public Health Service to declare sexuality education in public schools an "urgent need." This marked a significant step forward in recognizing the importance of comprehensive sex education in promoting sexual health and wellbeing for all individuals.',
    },
    {
      id: 8,
      date: "1953. ASHA launches family life education programs",
      quote:
        "By the 1950s, sexual attitudes had once again begun to change. The American Social Hygiene Association began to raise funds from charitable organizations to develop and introduce Family Life Education programs in classes. They stressed family and group discussions.",
      image: "Card8.jpeg",
      more: "The Family Life Education programs aimed to provide students with a comprehensive understanding of family life, including topics such as childbirth, child-rearing, and family relationships. The programs were designed to be inclusive and engaging, using group discussions and interactive activities to help students learn. ASHA's programs were influential in shaping the modern approach to sex education, which emphasizes the importance of providing accurate and comprehensive information to students.",
    },
    {
      id: 9,
      date: "1964. SIECUS is formed.",
      quote:
        "The 1960s marked the “second sexual revolution.” Dr. Mary Steichen Calderone created the Sex Information and Education Council of the US. SEICUS focused on sex positivity and education.",
      image: "Card9.jpeg",
      more: "SIECUS was created in response to the growing demand for comprehensive sex education during the 1960s. The organization aimed to promote sexual health and well-being by providing accurate and evidence-based information to students. SIECUS advocated for a sex-positive approach to sex education, which emphasized the importance of healthy relationships, sexual diversity, and pleasure. The organization was influential in shaping the modern approach to sex education, which emphasizes the importance of providing students with accurate and comprehensive information about sexual health and relationships.",
    },
    {
      id: 10,
      date: "1968. Conservatives push back",
      quote:
        "In 1968, Gordon Drake, a leader in two conservative organizations wrote an article called “Black Board Power: NEA Threat to America.” He warned that the NEA and SIECUS were turning kids away from religion, which led to national advocacy against his message.",
      image: "Card10.jpeg",
      more: "During the late 1960s and early 1970s, conservative groups pushed back against the growing demand for comprehensive sex education. They argued that sex education was promoting immorality and undermining traditional values, particularly religious values. These groups argued for abstinence-only education and restricted access to contraceptives, a stance that would continue to have significant influence on sex education policies for decades to come.",
    },
    {
      id: 11,
      date: "1981. Adolescent Family Life Act passes",
      quote:
        "After the cultural revolution of the 1970s, the Adolescent Family Life was enacted during the Reagan administration. The law provided funding for public and nonprofit private organizations to counsel youth about abstinence until marriage.",
      image: "Card11.jpeg",
      more: "The Adolescent Family Life Act was a response to concerns about teenage pregnancy and sexual health in the United States during the 1970s. The law provided funding for programs that promoted abstinence until marriage, and restricted access to contraceptives. The law was controversial, with many advocates arguing that it was ineffective and undermined the rights of young people to access accurate and comprehensive information about sexual health and relationships.",
    },
    {
      id: 12,
      date: "1981. The HIV/AIDS crisis increases sex education efforts.",
      quote:
        "The HIV/AIDS crisis of the 1980s led to increased efforts to put sex education curricula in school. The U.S. public health service launched one of the largest campaigns in American history to educate the public about the risks of HIV and the importance of safe sex practices. Sex education programs in schools began to focus more on the prevention of sexually transmitted infections and the promotion of safer sex practices.",
      image: "Card12.jpeg",
      more: "The HIV/AIDS crisis was a turning point in sex education policy in the United States. The urgency of the epidemic led to increased public awareness of the importance of sex education and the need for comprehensive information about sexual health. The HIV/AIDS crisis also highlighted the need to address health disparities faced by marginalized communities, including people of color, LGBTQ+ individuals, and people living in poverty. As a result, many sex education programs began to focus more on issues of diversity and inclusion, and advocates pushed for policies that ensured all students had access to accurate and comprehensive information.",
    },
    {
      id: 13,
      date: "1990. SIECUS drafted the Guidelines.",
      quote:
        "The debate over what should be included in sex education continued. SIECUS assembled a task force to draft the first Guidelines for Comprehensive Sexuality Education.",
      image: "Card13.jpeg",
      more: "The SIECUS Guidelines for Comprehensive Sexuality Education provide a framework for teaching sex education that is comprehensive, age-appropriate, and medically accurate. They were developed by a task force of educators, health professionals, and parents, and provide guidelines for what topics should be covered in sex education at different grade levels. The guidelines emphasize the importance of providing information about abstinence, but also include information about contraception, healthy relationships, and sexual orientation and gender identity.",
    },
    {
      id: 14,
      date: "1995. Schools launch condom availability programs",
      quote:
        "Some schools have made condoms available to students to reduce teen pregnancy and STDs. By 1995, CAPS were operating in 431 public schools.",
      image: "Card14.jpeg",
      more: "Condom availability programs, also known as Condom Access Programs (CAPs), have been shown to be effective in reducing rates of sexually transmitted infections (STIs) and unintended pregnancies among teenagers. These programs make condoms readily available to students, either for free or at a low cost, in schools or other community settings.",
    },
    {
      id: 15,
      date: "1996. Personal Responsibility & Work Opportunity Reconciliation Act",
      quote:
        "The 1996 Personal Responsibility & Work Opportunity Reconciliation Act (also called the 1996 Welfare Act) was a step backwards for educators. The program included $50 million a year appropriation for five years to govern abstinence-only education.",
      image: "Card15.jpeg",
      more: "The Personal Responsibility and Work Opportunity Reconciliation Act of 1996 allocated federal funds for abstinence-only education programs, which teach that abstaining from sexual activity outside of marriage is the only way to prevent pregnancy and STIs. Critics argue that these programs are ineffective and promote harmful stereotypes and misinformation about sexuality.",
    },
    {
      id: 16,
      date: "2000. Community-Based Abstinence Education program",
      quote:
        "To further abstinence-only education efforts, the government launched a Community-Based Abstinence Education (CBAE) program. The program was originally funded at $20 million, which would be granted to community organizations to fund abstinence-only education.",
      image: "Card16.jpeg",
      more: "The Community-Based Abstinence Education program (CBAE) was launched in 2000 to provide federal funding to community organizations for abstinence-only education programs. However, critics argue that these programs are not effective in preventing unintended pregnancies or STIs, and may even increase the risk of these outcomes by providing inaccurate or incomplete information about sexual health.",
    },
    {
      id: 17,
      date: "2007. Studies published show failures of abstinence education",
      quote:
        "In 2007, a congressionally mandated study conducted by Mathematica showed that abstinence-only education was actually damaging to students. A 2007 meta-analysis of 13 abstinence-only programs showed that they failed to reduce unprotected sex and number of sexual partners.",
      image: "Card17.jpeg",
      more: "The negative effects of abstinence-only education were further highlighted in a report published in 2011 by the National Survey of Family Growth, which found that individuals who received abstinence-only education were more likely to engage in risky sexual behavior and less likely to use contraception when compared to their peers who received comprehensive sex education. This report further emphasizes the importance of evidence-based and comprehensive sex education programs.",
    },
    {
      id: 18,
      date: "2008. The Future of Sex Education Initiative is launched",
      quote:
        "Advocates for Health Youth, Answer, and SIECUS created the Future of Sex Education Initiative (FoSE) with private funding. The FoSE published the National Sexuality Education Standards in 2012, the National Teacher Preparation Standards, and the National Professional Development Standards",
      image: "Card18.jpeg",
      more: "The Future of Sex Education Initiative was launched to address the need for comprehensive sex education in schools. It aimed to provide young people with the knowledge and skills they need to make informed decisions about their sexual health. The publication of the National Sexuality Education Standards in 2012, the National Teacher Preparation Standards, and the National Professional Development Standards provided a framework for schools and educators to deliver comprehensive and evidence-based sex education programs.",
    },
    {
      id: 19,
      date: "2010. Congress creates the Office of Adolescent Health",
      quote:
        "In 2010, Congress authorized the creation of the Office of Adolescent Health within the Department of Health and Human Services to promote adolescent health. The OAH administered the Teen Pregnancy Prevention Program, which funded evidence-based sex education initiatives.",
      image: "Card19.jpeg",
      more: "The creation of the Office of Adolescent Health within the Department of Health and Human Services in 2010 was a significant step in promoting adolescent health in the United States. One of the key initiatives administered by the OAH was the Teen Pregnancy Prevention Program, which aimed to reduce rates of teen pregnancy and improve health outcomes for young people. The program funded evidence-based sex education initiatives that were proven to be effective in reducing risky sexual behaviors and improving health outcomes.",
    },
    {
      id: 20,
      date: "2012. Congress passes the “Competitive Abstinence Education” (CAE) Grant Program",
      quote:
        "Abstinence-only education programs gained traction again in 2012 with the Competitive Abstinence Education Programs, which was then rebranded as the “Sexual Risk Avoidance Education” program in 2015. The focus was, once again, to federally fund abstinence-only education.",
      image: "Card20.jpeg",
      more: "The Competitive Abstinence Education Programs, later renamed as the Sexual Risk Avoidance Education program, marked a step backwards in sex education policy in the United States. The focus of these programs was once again to fund abstinence-only education initiatives, which had been proven to be ineffective and even harmful in some cases. This move away from evidence-based and comprehensive sex education programs was criticized by many advocates for sexual and reproductive health.",
    },
    {
      id: 21,
      date: "2012. The National Abstinence Education Association rebrands.",
      quote:
        "The NAEA changed its name to Ascend in 2012, and renewed their campaign for students to avoid sexual activity until marriage. They also marketed their programs as poverty prevention, stating that early pregnancy inhibited social mobility.",
      image: "Card21.jpeg",
      more: "The rebranding of the National Abstinence Education Association (NAEA) as Ascend in 2012 was a strategic move to renew their campaign for abstinence-only education. The organization continued to advocate for students to avoid sexual activity until marriage, and marketed their programs as poverty prevention, arguing that early pregnancy inhibited social mobility. However, this approach to sex education has been criticized for being ineffective and ignoring the realities of adolescent sexual behavior. Comprehensive sex education that includes information on contraception, healthy relationships, and consent has been shown to be more effective in promoting sexual and reproductive health among young people.",
    },
    {
      id: 22,
      date: "2015. The Every Student Succeeds Act (ESSA)",
      quote:
        "The Every Student Succeeds Act was signed into law in 2015, which provided funding for a variety of education programs, including sex education. The law allowed states to use federal funds for both comprehensive sex education and abstinence-only programs.",
      image: "Card22.jpeg",
      more: "The Every Student Succeeds Act (ESSA) is a federal law that replaced the No Child Left Behind Act (NCLB) in 2015. ESSA aims to provide more flexibility and decision-making power to states and school districts in setting education policy. The law includes provisions related to funding for sex education programs. Under ESSA, states can use federal funds for both comprehensive sex education and abstinence-only programs. However, the law requires that programs be medically accurate and evidence-based. States must also demonstrate that they are addressing the needs of all students, including those with disabilities and those who are English language learners.",
    },
    {
      id: 23,
      date: "2017. The Teen Pregnancy Prevention Program faces funding challenges",
      quote:
        "In 2017, the Trump administration attempted to cut funding for the Teen Pregnancy Prevention Program (TPPP). However, after multiple lawsuits, federal courts ruled that the funding cuts were unlawful, and the program continued to receive funding.",
      image: "Card23.jpeg",
      more: "The Teen Pregnancy Prevention Program (TPPP) is a federal program that provides funding for evidence-based programs to prevent teen pregnancy. In 2017, the Trump administration attempted to cut funding for the TPPP by ending grants to 81 organizations that participated in the program. The administration argued that the program was ineffective and that the funds should be redirected to abstinence-only education. However, several organizations filed lawsuits against the administration, arguing that the funding cuts were unlawful. In 2018, federal courts ruled that the administration had acted unlawfully by ending the grants, and the program continued to receive funding.",
    },
    {
      id: 24,
      date: "2018. Advances in LGBTQ+ inclusive sex education",
      quote:
        "Some states and school districts began to implement LGBTQ+ inclusive sex education programs, focusing on the unique needs and experiences of LGBTQ+ students. These programs aimed to reduce health disparities and promote a more inclusive learning environment.",
      image: "Card24.jpeg",
      more: "LGBTQ+ inclusive sex education programs aim to provide information and resources that are relevant and applicable to the unique experiences and needs of LGBTQ+ students. These programs aim to reduce health disparities and promote a more inclusive learning environment. Examples of LGBTQ+ inclusive sex education topics may include gender identity and expression, sexual orientation, and HIV prevention and care for LGBTQ+ individuals. While not all states and school districts have implemented LGBTQ+ inclusive sex education programs, there has been growing support for these programs in recent years.",
    },
    {
      id: 25,
      date: "2020. The COVID-19 pandemic impacts sex education",
      quote:
        "The COVID-19 pandemic disrupted traditional classroom education, including sex education. In response, many organizations and educators adapted by offering virtual sex education resources and programs to ensure students continued to receive accurate and comprehensive information.",
      image: "Card25.jpeg",
      more: "The COVID-19 pandemic disrupted traditional classroom education, including sex education. In response, many organizations and educators adapted by offering virtual sex education resources and programs to ensure that students continued to receive accurate and comprehensive information about sexual health and relationships. Virtual sex education resources may include online courses, webinars, and educational videos. These resources aim to provide students",
    },
    {
      id: 25,
      date: "2020. The COVID-19 pandemic impacts sex education",
      quote:
        "The COVID-19 pandemic disrupted traditional classroom education, including sex education. In response, many organizations and educators adapted by offering virtual sex education resources and programs to ensure students continued to receive accurate and comprehensive information.",
      image: "Card25.jpeg",
      more: "The COVID-19 pandemic posed unprecedented challenges for sex education in the United States, as traditional classroom education was disrupted. However, organizations and educators quickly adapted by offering virtual sex education resources and programs, ensuring that students continued to receive accurate and comprehensive information despite the challenges presented by the pandemic.",
    },
    {
      id: 26,
      date: "2021. The fight for comprehensive sex education continues",
      quote:
        "As of 2021, the fight for comprehensive, inclusive, and evidence-based sex education continues in the United States. Advocates and educators work tirelessly to ensure that all students have access to the information they need to make informed decisions about their sexual health and relationships.",
      image: "Card26.jpeg",
      more: "Despite ongoing efforts to promote comprehensive sex education in the United States, there is still much work to be done. Advocates and educators continue to fight for policies and funding that support evidence-based and inclusive sex education initiatives, particularly for marginalized communities who face health disparities.",
    },
    {
      id: 27,
      date: "2021. California mandates ethnic studies, including LGBTQ+ history",
      quote:
        "In 2021, California became the first state to require ethnic studies, including LGBTQ+ history, as a graduation requirement for high school students. The new curriculum aims to promote understanding, tolerance, and inclusion.",
      image: "Card27.jpeg",
      more: "California's decision to require ethnic studies, including LGBTQ+ history, as a graduation requirement for high school students is a significant step towards promoting understanding, tolerance, and inclusion in the state's education system. By highlighting the contributions and experiences of marginalized communities, this curriculum can help create a more equitable and inclusive society.",
    },
    {
      id: 28,
      date: "2021. The Biden administration supports comprehensive sex education",
      quote:
        "Under the Biden administration, support for comprehensive sex education and reproductive health services has increased. The administration has expressed commitment to evidence-based sex education and the importance of addressing health disparities faced by marginalized communities.",
      image: "Card28.jpeg",
      more: "The Biden administration's commitment to evidence-based sex education and reproductive health services is a welcome change from previous administrations, which had often prioritized abstinence-only education and limited access to reproductive health care. By addressing health disparities faced by marginalized communities and supporting comprehensive sex education initiatives, the administration is taking an important step towards promoting equity and improving health outcomes.",
    },
    {
      id: 29,
      date: "2021. State-level battles for sex education continue",
      quote:
        "In 2021, state-level battles over sex education policies and funding continued, with some states pushing for more comprehensive and inclusive programs, while others advocate for abstinence-only or limited sex education.",
      image: "Card29.jpeg",
      more: "The ongoing battles over sex education policies and funding at the state level highlight the need for continued advocacy and education on the importance of comprehensive and inclusive sex education. While some states have made progress in promoting evidence-based sex education, there are still many challenges to be overcome in ensuring that all students have access to the information and resources they need to make informed decisions about their sexual health and relationships.",
    },
    {
      id: 30,
      date: "2021. Digital resources expand access to sex education",
      quote:
        "As digital technology continues to advance, access to accurate and comprehensive sex education resources has expanded. Online platforms, apps, and social media have allowed educators and organizations to reach a wider audience and provide essential information on sexual health and relationships.",
      image: "Card30.jpeg",
      more: "The emergence of digital resources has transformed the way sex education is delivered in the United States. Online platforms, apps, and social media have allowed educators and organizations to reach a wider audience and provide essential information on sexual health and relationships. These digital resources offer an opportunity to reach underserved communities and provide access to accurate and comprehensive sex education resources, including those related to sexual orientation and gender identity.",
    },
    {
      id: 31,
      date: "2022-2023. The ongoing fight for comprehensive sex education",
      quote:
        "The fight for comprehensive, inclusive, and evidence-based sex education continues in the United States, with advocates and educators working to ensure all students have access to the information and resources they need to make informed decisions about their sexual health and relationships.",
      image: "Card31.jpeg",
      more: "Despite progress made in recent years, there is still a significant need for comprehensive, inclusive, and evidence-based sex education in the United States. Advocates and educators are working tirelessly to ensure that all students have access to the information and resources they need to make informed decisions about their sexual health and relationships. This includes efforts to promote consent education, LGBTQ+ inclusivity, and an understanding of healthy relationships and boundaries.",
    },
    {
      id: 32,
      date: "2022. New York mandates comprehensive sex education",
      quote:
        "In 2022, New York passed legislation requiring all public schools to provide age-appropriate, medically accurate, and inclusive comprehensive sex education. The law aims to promote healthy relationships, consent, and diversity.",
      image: "Card32.jpeg",
      more: "New York's recent legislation is a significant step forward in promoting comprehensive and inclusive sex education. The law requires public schools to provide age-appropriate, medically accurate, and inclusive comprehensive sex education to students, including information on healthy relationships, consent, and diversity. By mandating this type of education, New York is working to ensure that all students have access to the information and resources they need to make informed decisions about their sexual health and relationships.",
    },

    {
      id: 33,
      date: "2022. Virginia expands sex education curriculum",
      quote:
        "Virginia expanded its sex education curriculum in 2022 to include topics such as consent, healthy relationships, and LGBTQ+ inclusivity. The updated curriculum emphasizes the importance of providing students with a comprehensive understanding of sexual health.",
      image: "Card33.jpeg",
      more: "The Virginia Board of Education updated its sex education guidelines to require that schools include age-appropriate instruction on consent, gender identity, sexual orientation, and healthy relationships. The guidelines also require that schools address the risks of dating violence, sexual harassment, and sexual assault. The changes were met with some resistance from conservative groups who argued that the new curriculum promoted a progressive agenda, but advocates praised the move as a step toward more inclusive and comprehensive sex education.",
    },
    {
      id: 34,
      date: "2023. Growing support for LGBTQ+ inclusive sex education",
      quote:
        "In 2023, the movement for LGBTQ+ inclusive sex education continued to gain momentum as more states and school districts adopted comprehensive curricula that address the needs and experiences of LGBTQ+ students.",
      image: "Card34.jpeg",
      more: "LGBTQ+ inclusive sex education has been a contentious issue in many parts of the United States. While some states and school districts have embraced more comprehensive and inclusive curricula, others continue to resist, arguing that such curricula promote a progressive agenda or violate religious values. However, advocates argue that LGBTQ+ inclusive sex education is essential for promoting healthy relationships and reducing health disparities among LGBTQ+ youth, who are at increased risk for sexually transmitted infections, unintended pregnancy, and other health issues.",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleOpenModal = (item) => {
    setShowModal(true);
    setSelectedItem(item);
  };

  return (
    <>
      <header>
        <div className="container text-center">
          <h1 className="title">U.S Sex Education Timeline</h1>
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
                {item.more && (
                  <a className="bnt-more" onClick={() => handleOpenModal(item)}>
                    More
                  </a>
                )}

                {showModal && selectedItem && (
                  <div className="timeline-modal">
                    <div className="modal-content">
                      <span className="close-button" onClick={handleModal}>
                        &times;
                      </span>
                      <h2>{selectedItem.date}</h2>
                      <p>{selectedItem.more}</p>
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
