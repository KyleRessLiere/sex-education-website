import React, { useState } from "react";
import USAMap from "react-usa-map";
import Navbar from "../Navbar/Navbar";

const StateModal = ({ stateInfo, onClose }) => {
  if (!stateInfo) return null;

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleModalClick}>
      <div className="modal-content">
        <h2>{stateInfo.title}</h2>
        <p>{stateInfo.description}</p>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

function Map() {
  const [selectedState, setSelectedState] = useState(null);

  const setDescription = (title, description) => {
    setSelectedState({ title, description });
    console.log("testing");
  };

  const statesCustomConfig = () => {
    return {
      AL: {
        fill: "#FDB813",
        clickHandler: () =>
          setDescription(
            "Alabama",
            `In Alaska, schools are not required to teach sex education, and there are no specific state standards regarding abstinence instruction or medically accurate sex education. Curriculum is also not required to include instruction on sexual orientation or gender identity, although the Content and Performance Standards for Alaska Students suggests that students should be able to comprehend major developments related to class, ethnicity, race, and gender. Additionally, there is no requirement for instruction on consent, but sex education curriculum must be available for review by parents or guardians, who are allowed to remove their children from any activity, class, or program. 
            However, there have been recent legislative efforts to advance sex education in Alaska, including Senate Bill 157, which would require sexual health education to be a component of health and personal safety curriculum for K-12 schools. Various regressive pieces of legislation were also introduced in 2022, which aimed to increase the accessibility of curriculum to the public but would stigmatize the important information provided under sex education and infringe upon young people’s right to access this education to help them make healthy, informed decisions for themselves.    
            Since sex education is not mandated in Alaska, advocates can take action to ensure young people in their community have access to quality sex education. This includes contacting their local school board to determine what topics are missing from instruction and addressing misconceptions concerning sex education to increase community support. Advocates are also encouraged to take action on pending legislation that seeks to advance or restrict the principles of sex education and contact their representatives to discuss the critical need for advancing sex education requirements and increasing funding to support districts in implementing curriculum.
            `
          ),
        title: "Alabama",
      },
      AK: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "Alaska",
            `Arizona schools are not required to provide sex education to students. If a school chooses to teach sex education, it must stress abstinence. HIV education is not mandated, but if it is offered, the curriculum must be medically accurate. Curriculum is not required to include instruction on sexual orientation or gender identity, or instruction on consent. Parents or guardians must provide written permission for their children to participate in sex education. This is referred to as an “opt-in” policy. Recent legislative efforts have aimed to change Arizona’s “opt-in” policy to an “opt-out” policy and require sex education to be medically accurate and comprehensive, but these efforts have been unsuccessful so far. Local control over sex education presents unique challenges that have resulted in disparities in the quality of sex education that students receive. Advocates can take action to ensure young people in their community have access to quality sex education, such as investing in local school board races, building coalitions, and contacting local school boards to vocalize the need for advancing instruction requirements.
            `
          ),
        title: "Alaska",
      },
      AZ: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "Arizona",
            `Arizona schools are not required to provide sex education to students. If a school chooses to teach sex education, it must stress abstinence. HIV education is not mandated, but if it is offered, the curriculum must be medically accurate. Curriculum is not required to include instruction on sexual orientation or gender identity, or instruction on consent. Parents or guardians must provide written permission for their children to participate in sex education. This is referred to as an “opt-in” policy. Recent legislative efforts have aimed to change Arizona’s “opt-in” policy to an “opt-out” policy and require sex education to be medically accurate and comprehensive, but these efforts have been unsuccessful so far. Local control over sex education presents unique challenges that have resulted in disparities in the quality of sex education that students receive. Advocates can take action to ensure young people in their community have access to quality sex education, such as investing in local school board races, building coalitions, and contacting local school boards to vocalize the need for advancing instruction requirements.
            `
          ),
        title: "Arizona",
      },
      AR: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            "Arkansas",
            `Sex education is not currently mandated in Arkansas, but if offered, it must stress abstinence. Schools are not required to teach sex education or instruction on HIV or STIs. If sex education is offered, the curriculum must stress abstinence, but it is not required to include instruction on consent, sexual orientation or gender identity, or medically accurate information. Arkansas has no standard regarding the ability of parents and guardians to remove their children from sex education instruction. Students are required to complete 0.5 units of health and safety in order to graduate. In 2021, Arkansas enacted two regressive bills related to sex education, one prohibiting public schools or open-enrollment public charter schools from entering into any type of transaction with an individual or entity that provides abortion care, and the other requiring parental notification if sex education or instruction on sexual orientation or gender identity is provided. Local school districts are left to decide what type of sex education they provide, presenting challenges in ensuring that all students have access to quality sex education. Advocates can take action to ensure young people in their community have access to quality sex education by contacting their local school board and representatives, vocalizing the need for advancing sex education requirements, and using the SIECUS Community Action Toolkit.`
          ),
        title: "Arkansas",
      },
      CA: {
        fill: "#7C2D3A",
        clickHandler: () =>
          setDescription(
            "California",
            `In California, sex education is mandated by state law under the California Healthy Youth Act (Education Code § 51933-51934). Schools must provide comprehensive, medically accurate, and culturally competent sex education to all students in grades 7-12 at least once in middle school and once in high school. The curriculum must be age-appropriate, objective, and inclusive of all races, genders, sexual orientations, ethnic and cultural backgrounds, disabilities, and English learners. It must also include information on abstinence and teach students about gender, gender expression, gender identity, and gender stereotypes. While consent education is not mandatory, instruction on healthy relationships must be provided to help students form relationships based on mutual respect and affection, free from violence, coercion, and intimidation. Parents or guardians may opt-out of sex education and STI/HIV education classes. Recent legislation, such as Assembly Bill 2586, aims to provide grants and resources for sex education organizations, but advocates report that implementation of existing laws and funding issues continue to create barriers to sex education for some students, particularly in rural and low-income communities. `
          ),
        title: "California",
      },
      CO: {
        fill: "#EE7F2D",
        clickHandler: () =>
          setDescription(
            "Colorado",
            `The requirements for sex education in Colorado are as follows: while sex education is not required, if it is offered, the curriculum must be comprehensive and medically accurate, and it must not emphasize sexual abstinence as the sole preventative method. The curriculum must include instruction on consent, and if pregnancy options are taught, abortion must be included as an option. Sex education must not exclude the health needs of LGBT or intersex individuals, must be age-appropriate, culturally sensitive, and taught in a cohesive, integrated, and objective manner. Parents or guardians can remove their children from sex education instruction with written notification. Finally, the Colorado Department of Education is responsible for providing guidelines as to the length of courses, the subjects included, and the manner in which these subjects are addressed.
            `
          ),
        title: "Colorado",
      },
      CT: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
            "Connecticut",
            `In Connecticut, state law does not specifically require schools to teach sex education. However, Connecticut General Statutes §§ 164-10-16(b)–(f) mandates schools to provide instruction on human growth and development as well as disease prevention. Schools are also required to offer planned, ongoing, and systematic instruction on acquired immune deficiency syndrome (AIDS) during the regular school day by legally qualified teachers.
            The Connecticut State Board of Education is responsible for developing family life education curriculum guidelines that cover various topics, but the instruction is ultimately left to the discretion of local or regional boards of education. Parents or guardians may choose to remove their children from sex education and/or STI/HIV education classes with written notification, following an "opt-out" policy.
            The Guidelines for the Sexual Health Education Component of Comprehensive Health Education offer guidance for sex education curricula in Connecticut, although adherence to these guidelines is not required by state statute. This results in varying levels of sex education instruction across districts, depending on how closely each school board aligns their curriculum with the guidelines.
            `
          ),
        title: "Connecticut",
      },
      // Add D.C. object
      DC: {
        fill: "#6C757D",
        clickHandler: () =>
          setDescription(
            "District of Columbia",
            "The District of Columbia, also known as D.C., is the capital of the United States and home to many historic landmarks and government buildings."
          ),
        title: "District of Columbia",
      },
      DE: {
        fill: "#FDB813",
        clickHandler: () =>
          setDescription(
            "Delaware",
            `In Delaware, sex education is mandated as part of the Comprehensive Health Education Program required for students in grades K-12. The curriculum must be comprehensive, although it does not meet nationally recognized standards for sex education. It stresses abstinence and includes instruction on consent. However, it is not required to include instruction on sexual orientation or gender identity. There is no standard in the Delaware statute regarding the ability of parents and guardians to enroll or remove their children from sex education instruction, nor is there a standard for medically accurate sex education instruction. Nevertheless, the curriculum on consent must be evidence-informed. In order to graduate from high school, students must receive 0.5 credits of comprehensive health education.`
          ),
        title: "Delaware",
      },

      FL: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
            "Florida",
            `In Florida, the state does not require schools to provide sex education to students. Instead, local school districts decide what type of sex education, if any, they provide to youth. Florida Statute 48-1003.42 requires public schools to teach "comprehensive health education" that includes prevention of child sexual abuse, exploitation, and human trafficking. Public schools must also teach students in grades 7 through 12 instruction on teen dating violence and abuse, while students in grades 6 through 12 must be instructed on "the benefits of sexual abstinence as the expected standard and the consequences of teenage pregnancy."
            Florida Statute 48-1003.46 states that each district school board may provide instruction in acquired immune deficiency syndrome education as a specific area of health education. The instruction may include, but is not limited to, the known modes of transmission, signs and symptoms, risk factors associated with acquired immune deficiency syndrome, and means used to control the spread of acquired immune deficiency syndrome. The instruction should teach abstinence from sexual activity outside of marriage as the expected standard for all school-age students, while teaching the benefits of monogamous, heterosexual marriage, among other things.
            Parents may submit a written request to the school principal to exempt their child from “the teaching of reproductive health or any disease, including HIV/AIDS, its symptoms, development, and treatment.” This is referred to as an “opt-out” policy.
            `
          ),
        title: "Florida",
      },
      GA: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            "Georgia",
            `In Georgia, schools are required by Georgia Code Annotated §§ 20-2-143 to teach sex education and AIDS prevention education. The state board of education is responsible for determining the minimum guidelines that sex education programs must adhere to. These guidelines emphasize abstinence from sexual activity until marriage and fidelity in marriage as important personal goals. Georgia Board of Education Rule 160-4-2-.12 states that sex education instruction should address peer pressure, promote high self-esteem, local community values, and abstinence from sexual activity as an effective method of preventing pregnancy, STIs, and AIDS. Local school boards have significant authority in deciding specific subjects to be covered, age-appropriate messaging, and the grade level in which topics are introduced. Parents or guardians can opt their children out of all or part of sex and/or STI/HIV education by providing written notice to the school.
            `
          ),
        title: "Georgia",
      },
      HI: {
        fill: "#EE7F2D",
        clickHandler: () =>
          setDescription(
            "Hawaii",
            `Sex education is mandated in Hawaii and must be medically accurate and age-appropriate. It is required to include instruction on abstinence, contraception, and methods to prevent unintended pregnancy and sexually transmitted infections (STIs), including HIV. Parents and guardians can opt their children out of sex education. Curriculum is not required to include instruction on sexual orientation or gender identity, but instruction must help students develop relationships and communication skills to form healthy relationships based on mutual respect and affection, free from violence, coercion, and intimidation.
            Advocates have successfully worked to advance sex education in Hawaii, but local control over sex education presents unique challenges that have resulted in a disparity regarding the quality of sex education that students receive. Advocates report that there are challenges with implementation in Hawaii schools and believe that the Department of Education is not prioritizing sex education. Advocates are encouraged to take action to ensure young people in their community have access to quality sex education, contact their representatives to discuss the need for the Department of Education to support schools in implementing current sex education requirements, and use the SIECUS Community Action Toolkit to guide local efforts to advance sex education.
            `
          ),
        title: "Hawaii",
      },
      ID: {
        fill: "#FDB813",
        clickHandler: () =>
          setDescription(
            "Idaho",
            `Sex education is not mandated in Idaho, but schools that offer it must emphasize abstinence. The curriculum is not required to include instruction on sexual orientation or gender identity, or on consent. Parents or guardians can opt their children out of sex education instruction by filing a written request with the school board. Local school districts have control over sex education, resulting in a wide variation in the quality of sex education provided. Advocates report challenges in advancing sex education due to the embroiled political climate in Idaho, minimal health education requirements, and a lack of resources. The Idaho Department of Education’s health education standards state that growth, development, and family life instruction should be medically accurate. Advocates are encouraged to take action on pending legislation related to sex education and to use resources such as the SIECUS Community Action Toolkit and EducateUs to get connected to local advocacy groups.`
          ),
        title: "Idaho",
      },
      IL: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "Illinois",
            `Illinois schools are not required to teach sex education, but if they choose to do so, it must be age and developmentally appropriate, medically accurate, complete, culturally appropriate, inclusive, trauma-informed, and replicate evidence-based or evidence-informed programs. The curriculum must include instruction on sexual orientation or gender identity, as well as on consent. Parents or guardians may opt their children out of any or all sex education, family life programs, and/or STD/HIV prevention programs. Recent legislation, such as Senate Bill 818, requires comprehensive sex education in schools that offer it, but there are still attempts to restrict or eliminate sex education, such as House Bills 5349 and 5494. Advocates continue to work towards a statewide mandate for sex education, as local control has resulted in disparities in the quality of sex education provided. Organizations such as Planned Parenthood of Illinois, Equality Illinois, and the ACLU of Illinois are working towards advancing sex education in the state. Youth sexual health data is not provided in the given information.`
          ),
        title: "Illinois",
      },
      IN: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            "Indiana",
            `Sex education is not currently mandated in Indiana, except for instruction on HIV. The curriculum for sex education must stress abstinence as the expected social standard, and it is not required to be medically accurate, evidence-based, or comprehensive. School districts are responsible for deciding whether to provide sex education to their students and what type of curriculum to use. Indiana has no regulation regarding medically accurate sex education instruction. However, schools are required to make two attempts to receive written permission from parents or guardians before automatically enrolling students in sex education. Curriculum is not required to include instruction on sexual orientation or gender identity or consent. Advocates have faced challenges in advancing sex education requirements in Indiana, including regressive legislation aimed at restricting or prohibiting instruction on certain topics. Therefore, advocates must take action to ensure that young people in their community have access to quality sex education.
            `
          ),
        title: "Indiana",
      },
      IA: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "Iowa",
            `Sex education is mandated in Iowa and must be research-based and age-appropriate, but it is not required to align with the National Sex Education Standards. Abstinence-based or abstinence-only materials are permitted as long as they fall within the parameters of the law, but there is no standard regarding the inclusion of abstinence in the curriculum. Sex education instruction must be free of bias based on race, ethnicity, sexual orientation, or gender. Curriculum is not required to include instruction on consent. Parents or guardians may remove their children from any part of health education courses if the course conflicts with the student’s religious beliefs, which is referred to as an “opt-out” policy. Sex education curriculum must be medically accurate. Advocates have introduced several bills in 2022 to improve sex education requirements, including instruction on topics such as consent, healthy relationships, sexual assault prevention, and LGBTQAI+ identities. However, several bills have also been introduced to restrict sex education and discussions of sexual orientation and gender identity in the classroom. Local control over sex education presents unique challenges that have resulted in a disparity regarding the quality of sex education that students receive. Advocates can take action to ensure young people in their community have access to quality sex education by contacting their local school board, determining what topics are missing from sex education instruction, and vocalizing the need for advancing sex education requirements in their community.
            `
          ),
        title: "Iowa",
      },
      KS: {
        fill: "#EE7F2D",
        clickHandler: () =>
          setDescription(
            "Kansas",
            `In Kansas, schools are required to provide instruction on human sexuality as part of their physical education curriculum, which includes instruction on topics such as puberty, abstinence, sexually transmitted infections, and the potential outcomes of sexual activity. However, the curriculum is not required to align with the National Sex Education Standards and is not required to include instruction on sexual orientation, gender identity, or consent. Additionally, there is no regulation regarding medically accurate sex education instruction.
            Kansas has no standard regarding the ability of parents and guardians to remove their children from sex education instruction, but the Kansas Model Curricular Standards for Health Education provides samples for both “opt-in” and “opt-out” letters.
            Efforts to improve accessibility to sex education in schools are focused on advocating for its inclusion in schools, outside of the physical education curriculum. Local school boards have the authority to establish additional requirements for sex education curriculum beyond what is mandated, which can lead to disparities in the quality of sex education that students receive. Advocates can take action by contacting their local school board, determining what topics are missing from sex education instruction, and vocalizing the need for advancing sex education requirements in their community. They can also reach out to advocacy groups for support and guidance.
            `
          ),
        title: "Kansas",
      },
      KY: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
            "Kentucky",
            `Kentucky requires students to take 0.5 credits of health education in order to graduate, including instruction on responsible sexual behavior, such as abstinence and preventing pregnancy, preventing STDs, and the basic reproductive system and functions. However, local school boards have the discretion to identify any additional curriculum schools provide, and there is no requirement for curriculum to be medically accurate, culturally responsive to the needs of young people of color, or include instruction on topics such as sexual orientation, gender identity, consent, healthy relationships, or contraceptive options. Advocates report that the current state standards are so vague that educators are often unsure of what they are permitted to teach, and as a result, opt to not teach sex education at all. Additionally, there is a law requiring abstinence to be taught as the “desirable goal” for young people. In 2018, Kentucky enacted a law stating that any human sexuality or STD curricula must include instruction on abstinence, state that “abstinence from sexual activity is the desirable goal for all school-age children,” and advocate for “permanent mutually faithful monogamous relationship[s].
`
          ),
        title: "Kentucky",
      },
      LA: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "Louisiana",
            `As of 2023, Louisiana schools are not required to teach sex education, but they are required to teach health education that includes instruction on sexual risk behaviors, HIV/AIDS, and other STIs. If sex education is offered, the curriculum must emphasize abstinence as the expected social standard and must not include any sexually explicit materials depicting homosexual activity. Curriculum is not required to include instruction on consent. Parents or guardians may remove their children from sex education classes (opt-out policy). There is no regulation regarding medically accurate sex education instruction, but if a school chooses to teach sex education, instruction must be based on factual biological or pathological information. Advocates have faced challenges in advancing sex education due to opposition from groups like the Louisiana Family Forum, and local control over sex education has led to disparities in the quality of education students receive. However, advocates can take action to ensure young people in their community have access to quality sex education by identifying missing topics in local sex education requirements and vocalizing the importance of implementing specific elements of sex education, such as trauma-informed, culturally responsive curriculum that addresses the needs of youth of color and LGBTQAI+ youth and instruction on consent.Maine
Maine schools are required to teach sex education through their course on "comprehensive family life education". Curriculum must include medically accurate instruction that emphasizes abstinence while also instructing on healthy relationships, contraception, family planning, sexually transmitted diseases (STDs), and conflict resolution. However, curriculum is not required to include instruction on sexual orientation or gender identity, and is not required to be culturally responsive to the needs of young people of color. Local school boards are largely responsible for establishing further curriculum requirements. Parents or guardians may remove their children from "comprehensive family life education" classes. This is referred to as an "opt-out" policy.
`
          ),
        title: "Louisiana",
      },
      ME: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "Maine",
            `
Maine schools are required to teach sex education through their course on "comprehensive family life education". Curriculum must include medically accurate instruction that emphasizes abstinence while also instructing on healthy relationships, contraception, family planning, sexually transmitted diseases (STDs), and conflict resolution. However, curriculum is not required to include instruction on sexual orientation or gender identity, and is not required to be culturally responsive to the needs of young people of color. Local school boards are largely responsible for establishing further curriculum requirements. Parents or guardians may remove their children from "comprehensive family life education" classes. This is referred to as an "opt-out" policy.
`
          ),
        title: "Maine",
      },
      MD: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            "Maryland",
            `In Maryland, schools are required to teach sex education, but the curriculum does not need to align with the National Sex Education Standards. The curriculum must emphasize abstinence as the best method for preventing unintended pregnancies and STIs. It must also include inclusive instruction on sexual orientation and gender identity, as well as consent education. Parents or guardians have the right to review all instructional materials before they are used and can choose to remove their children from any or all "Family Life and Human Sexuality" classes, which is known as an "opt-out" policy. Instruction on contraception and condoms must be medically accurate. Advocates continue working to advance sex education in the state, with recent legislation introduced to include age-appropriate sexting education and efforts to promote inclusive curriculum, such as the history of LGBTQAI+ and disability rights movements.
`
          ),
        title: "Maryland",
      },
      MA: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
            "Massachusetts",
            `As stated earlier, Massachusetts schools are not required to teach sex education. If sex education is offered, the curriculum must explain the benefits of abstinence. Curriculum is not required to include instruction on sexual orientation or gender identity, or consent. Parents and guardians can exempt their children from any portion of sex education instruction through written notification to the school principal. Massachusetts has no regulation regarding medically accurate sex education instruction. 
            Efforts are being made by advocates to advance the Healthy Youth Act, which would ensure that youth receive research-based, medically accurate, and culturally competent sex education in districts that require sex education. The latest iteration of the Healthy Youth Act, Senate Bill 2541, passed the Senate in 2022 but was ultimately unsuccessful. Advocates are working to re-introduce the bill in 2023. In addition to the Healthy Youth Act, advocates are working to improve current curriculum requirements. House 4693 was introduced in 2022 but was unsuccessful. The Department of Elementary and Secondary Education (DESE) is working to update the Health Curriculum Framework to ensure that discussion of consent is gender inclusive and trauma informed.
            Local control over sex education presents unique challenges that have resulted in a disparity regarding the quality of sex education that students receive. Many districts, including Boston Public Schools, use the Rights, Respect, Responsibility (3R’s) curriculum, but over 70 percent of districts use “abstinence-plus” instructional materials. Advocates are working to provide sex education curriculum that is not delivered in a gender-segregated manner, which is often alienating to transgender, nonbinary, and/or gender nonconforming young people. 
            Currently, House Bill 587 seeks to change sex education instruction from opt-out to opt-in and establishes procedures to get this consent. House Bill 509 would require that curriculum programs and activities which primarily involve human sexual education, human sexuality issues, or sexual orientation, shall be offered only in clearly identified non-mandatory elective courses which parents can choose to enroll their children in through written notification to the school. It also prohibits schools from requiring public school teachers or administrators to participate in this instruction if it violates their religious beliefs.`
          ),
        title: "Massachusetts",
      },
      MI: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "Michigan",
            `Michigan schools are not required to teach sex education, but HIV/AIDS education is required. Curriculum must stress abstinence as a positive lifestyle, and curriculum is not required to include instruction on sexual orientation or gender identity. Curriculum is also not required to include instruction on consent, but it must include instruction on refusal skills, that it is “wrong to take advantage of, harass, or exploit another person sexually”, and that having sex or sexual contact with an individual under the age of 16 is a crime. Parents or guardians must receive written notice of any sex education class and can remove their children from any part of the instruction. HIV/AIDS education must be medically accurate, but Michigan has no standard on medically accurate sex education. Local control over sex education has resulted in a disparity regarding the quality of sex education that students receive, and students report that sex education curriculum often lacks instruction on consent, information about sexual orientation and gender identity, and utilizes fear tactics to encourage young people to remain abstinent. There is no statewide sex education requirement, but schools may offer sex education instruction as an elective. Sex education classes must be taught by teachers qualified to teach health education and supervised by a registered physician, a registered nurse, or other person certified by the state board as qualified. Parents must receive notification of any sex education class and be allowed to review its content, and they may remove their children from any part of the sex education instruction.
            `
          ),
        title: "Michigan",
      },
      MN: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "Minnesota",
            `In Minnesota, schools are required to teach sex education. The curriculum must include instruction that helps students abstain from sexual activity until marriage, but it is not required to include instruction on sexual orientation or gender identity, or consent. Curriculum must be available for parental review, and parents or guardians may remove their children from instruction if they object to the content. While Minnesota has no regulation regarding medically accurate sex education, the curriculum is required to be "technically accurate." 
Advocates have taken steps to improve sex education in Minnesota over the past decade, resulting in the introduction of HF 174 in 2023, which would require the development of a comprehensive sex education model curriculum for elementary and secondary schools. However, local control over sex education presents unique challenges and allows for the implementation of policies and curriculum that stigmatize marginalized youth, such as students of color and LGBTQAI+ youth. Advocates report that the patchwork education youth receive, ranging from quality sex education to abstinence-only instruction, fails to provide the skills and information they need to determine what is best for their health and their future. 
Minnesota Statutes §§ 120B.20 and 121A.23 require every school district to develop and implement a comprehensive risk-reduction program "including but not exclusive to human immunodeficiency virus [HIV] and human papilloma virus [HPV]." While the state has not developed a specific curriculum, each school district must have "a comprehensive, technically accurate, and updated curriculum that includes helping students to abstain from sexual activity until marriage" and must target "adolescents, especially those who may be at high risk of contracting sexually transmitted infections [STIs] and [sexually transmitted] diseases [STDs], for prevention efforts.Minnesota's National Health Education Standards and Minnesota Benchmarks provide guidance for local school district curriculum development. The standards do not mention contraception or condoms, but they briefly mention HIV transmission and unintended pregnancy. 
In 2022, the CDC released the School Health Profiles, which measure school health policies and practices and highlight which health topics were taught in schools across the country. In Minnesota, 22.9% of secondary schools taught students all 22 critical sexual health education topics in a required course in any of grades 6, 7, or 8, and 47.3% taught all 22 topics in grades 9-12.
"
`
          ),
        title: "Minnesota",
      },
      MS: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            "Mississippi",
            ` Mississippi schools are required by law to adopt either an “abstinence-only” or an “abstinence-plus” education policy for their human sexuality instruction. Both types of instruction must include “abstinence-only education” which stresses the importance of abstaining from sexual activity before marriage and fidelity within marriage. “Abstinence-only” instruction must teach the social, psychological, and health benefits of abstaining from sexual activity, as well as the negative psychological and physical effects of not abstaining. The curriculum must also teach the harmful consequences of bearing children out of wedlock, unwanted sexual advances, and how alcohol and drug use increase vulnerability to sexual advances. The current state law related to sexual conduct, including forcible rape, statutory rape, paternity establishment, child support, and homosexual activity, must also be included in the instruction.
        Under Mississippi law, “abstinence-plus” instruction may discuss broader sexual health topics, such as the nature, causes, and effects of sexually transmitted diseases (STDs) and HIV prevention education. However, it must not include instruction or demonstrations on the application and use of condoms. Instruction may include a discussion of contraceptives, as long as it presents a factual presentation of the risks and failure rates. Schools are not required to address every component of “abstinence-only” instruction, but no instruction provided under an “abstinence-only” program can contradict any of these components.
        Schools are also required to receive written permission from a parent or guardian before a student can participate in a sex education course, and parents or guardians must receive notification at least one week prior to the provision of any human sexuality instruction. This is referred to as an “opt-in” policy, where parents or guardians have the right to request the inclusion of their child in sex education instruction.
        Mississippi has no regulation regarding medically accurate instruction, and the state’s curriculum is not required to include instruction on consent. Local control over school curriculum presents unique challenges that have resulted in a glaring disparity regarding the quality of sex education that students receive, especially for marginalized youth such as students of color and LGBTQAI+ youth. Organizations such as Teen Health Mississippi have implemented programs to empower youth to make informed decisions about their sexual health and work within the state’s restrictive requirements to ensure students receive optimal instruction.
        `
          ),
        title: "Mississippi",
      },
      MO: {
        fill: "#EE7F2D",
        clickHandler: () =>
          setDescription(
            "Missouri",
            `Missouri schools are not required to teach sex education, but they are required to teach health education, including HIV/AIDS prevention education. Curriculum must present abstinence as the preferred choice of behavior. If sex education is offered, curriculum is not required to include instruction on sexual orientation or gender identity. If sex education is offered, curriculum must include instruction on consent. Parents and guardians can remove their children from any part of their sex education instruction. All course materials related to HIV/AIDS, along with sex education curriculum if offered, must be medically accurate.
            Advocates in Missouri have made incremental advancements to Missouri’s sex education requirements in the past seven years, particularly by expanding curriculum to include instruction on sexual harassment, sexual violence, and consent, and are now considering further efforts to revise the state’s current mandate. In 2022, advocates introduced House Bill 1752, which sought to require medically accurate information on contraception while still emphasizing abstinence and stressing negative consequences associated with sexually transmitted infections.
            Missouri advocates report that there are only a few schools that are providing quality sex education, while the majority of districts provide abstinence-only or abstinence-plus instruction. The patchwork nature of Missouri’s sex education curriculum requirements fails to ensure that all students receive the same quality of sex education. Further, an abysmal three percent of Missouri students reported receiving LGBTQAI+-inclusive sex education, according to GLSEN’s 2019 National School Climate Survey.
            Since Missouri schools are not required to provide sex education to students, school districts are left to decide what type of sex education–if any at all–they provide to youth. Local control over sex education presents unique challenges that have resulted in a glaring disparity regarding the quality of sex education that students receive. Such discretion allows for the implementation of policies and curriculum that stigmatize marginalized youth, such as students of color and LGBTQAI+ youth, and presents further challenges in ensuring that low income districts have access to the resources needed to implement sex education.
            `
          ),
        title: "Missouri",
      },
      MT: {
        fill: "#FDB813",
        clickHandler: () =>
          setDescription(
            "Montana",
            `abstinence instruction or instruction on sexual orientation, gender identity, or consent. Schools must give written notification to a parent or guardian at least 48 hours prior to providing sex education that covers the basic content and the right to remove their children from such instruction. The curriculum is not required to include instruction on medically accurate sex education. School districts are required to make all curriculum used in the district’s or school’s human sexuality instruction available for public inspection prior to the use of the materials in actual instruction. Advocates can take action at the local level to advance sex education in their community and ensure young people have access to quality sex education. Montana’s 2023 biennial session convenes on January 02, 2023.`
          ),
        title: "Montana",
      },
      NE: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "Nebraska",
            `In Nebraska, schools are not required to teach sex education. However, if they choose to do so, they must follow an abstinence-only approach. The curriculum is not required to include instruction on sexual orientation or gender identity, but it must be equitable and not discriminate against students based on their sexual orientation or gender expression. Instruction on consent is also not required, but the curriculum must include instruction on identifying characteristics of healthy dating relationships. Nebraska has no standard regarding the ability of parents and guardians to remove their children from sex education instruction, nor does it have a regulation regarding medically accurate sex education instruction. Advocates in Nebraska have made multiple efforts to advance sex education in the state, including both successful local efforts and unsuccessful statewide efforts. However, there have also been significant efforts to limit sex education with the introduction of bills such as Legislative Bill 768 in 2022. The Nebraska Department of Education has revised their Nondiscrimination and Equitable Educational Opportunities in Schools Position Statement to be inclusive of a multitude of identities, including sexual orientation and gender identity. The department has also teamed up with educators to develop the first Nebraska Health Education Standards, but the process was indefinitely paused in September 2021 due to conservative attacks and pushback. Despite the presence of organizations invested in advancing sex education across the state, advocates note that the lack of a unified effort is one of the major barriers to advancing sex education in Nebraska.`
          ),
        title: "Nebraska",
      },
      NV: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "Nevada",
            `The requirements for sex education in Nevada include the establishment of a human sexuality course in each school district, but the course cannot be a requirement for graduation. The curriculum must emphasize abstinence as the only way to avoid pregnancy and STIs, but there is no standard regarding instruction on abstinence. Curriculum is not required to include instruction on sexual orientation and gender identity or consent. Parents must provide written consent for their children to participate in human sexuality education, which is referred to as an “opt-in” policy. Nevada has no regulation regarding medically accurate sex education instruction, although instruction on AIDS must be factual. Each school district is responsible for determining what additional curriculum, if any, they provide to students.`
          ),
        title: "Nevada",
      },
      NH: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            "New Hampshire",
            `In New Hampshire, state law requires local school boards to provide health education as part of the basic curriculum. This includes instruction on sexually transmitted diseases (STDs), including HIV/AIDS, healthy relationships, growth and development, and pregnancy prevention. However, the specific content and quality of sex education are left to the discretion of individual school districts. Consequently, there is a significant disparity in the quality of sex education across districts.
            New Hampshire Revised Statutes §§ 186:11 and 189:10 mandate that local school boards ensure health education is taught, covering subjects such as physiology, hygiene, and health and physical education, with a focus on HIV/AIDS and STDs. The Department of Education is required to develop curriculum frameworks addressing these subjects and provide information on HIV/AIDS to all public and private schools to help them develop courses and programs.
            Revised Statutes § 193-E:2-a specifies that public schools and public academies must adhere to the identified standards for health education. These standards cover kindergarten through twelfth grade and include communication, analytical, research skills, and substantive knowledge expected to be possessed by students at various grade levels.
            New Hampshire state law also requires school districts to adopt an "opt-out" policy, allowing parents to exempt their child from specific units of health or sex education based on religious objections.
            `
          ),
        title: "New Hampshire",
      },
      NJ: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
            "New Jersey",
            `In New Jersey, schools are required to provide instruction on human sexuality, with the curriculum stressing abstinence as a primary method of preventing pregnancy and sexually transmitted infections (STIs). The curriculum must also include education on sexual orientation and gender identity topics, as well as information about consent, its importance, and its legal implications. New Jersey allows parents or guardians to remove their children from any part of health, family life, or sex education classes if it conflicts with their beliefs, known as the "opt-out" policy. Furthermore, the curriculum must be medically accurate, ensuring that students receive up-to-date and factual information about sexual health.
            In recent years, New Jersey has passed laws that further expand the scope of sex education, including instruction on consent, sexual abuse and assault, consequences of distributing and soliciting sexually explicit images, and the "New Jersey Safe Haven Infant Protection Act." Despite these advancements, more efforts are needed to ensure that young people in New Jersey receive comprehensive and high-quality sex education. Advocates continue to push for increased funding for sex education programming, teacher training, and support from both the New Jersey Department of Education and local boards of education. They also call for greater public knowledge surrounding sex education and improved strategies for dispelling myths and concerns about it in order to expand its reach statewide.
            `
          ),
        title: "New Jersey",
      },
      NM: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "New Mexico",
            `New Mexico schools are required to teach sex education as part of their health education requirement, but the curriculum is only required to stress abstinence. The curriculum is not required to include instruction on sexual orientation or gender identity, or on consent. Parents and guardians can request to remove their student from sex education instruction, and New Mexico has no regulation regarding medically accurate sex education curriculum. Each school district determines what additional curriculum they provide to youth beyond the required HIV/AIDS, pregnancy prevention, cultural portrayals of gender, and healthy relationships instruction. However, advocates report that a growing number of school districts have begun implementing sex education, and an increasing number of young people have participated in sex education programs across the state. Local control over sex education presents unique challenges that have resulted in a glaring disparity regarding the quality of sex education that students receive. Advocates can take action to ensure all young people in their community have access to quality sex education, including focusing on specific topics such as consent, sexual orientation and gender identity, or contraceptive options, or emphasizing the importance of requiring curriculum to be evidence based and medically accurate.
            `
          ),
        title: "New Mexico",
      },
      NY: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "New York",
            `New York schools are not required to teach sex education. However, HIV/AIDS instruction is required. The curriculum must stress abstinence. The curriculum is not required to include instruction on sexual orientation or gender identity. However, New York’s Guidance Document for Achieving the New York State Standards in Health Education includes instruction on sexual orientation and limited instruction on gender identity. Curriculum is not required to include instruction on consent. It's important to note that while these are the current requirements, New York City schools have been required to teach sex education since 2011 in the comprehensive health education course.
            State at a Glance
            `
          ),
        title: "New York",
      },
      NC: {
        fill: "#EE7F2D",
        clickHandler: () =>
          setDescription(
            "North Carolina",
            `In North Carolina, sex education requirements include teaching comprehensive health education in schools, with a focus on the benefits of abstinence. The curriculum is not required to include instruction on sexual orientation, gender identity, or consent. Parents and guardians have the ability to either exempt their children from sex education instruction or give written permission for their children to participate, depending on the school district, through "opt-out" and "opt-in" policies. The curriculum must be medically accurate. While the Healthy Youth Act of 2009 mandates medically accurate sex education, issues such as an emphasis on abstinence and lack of consent education persist. Additionally, recent efforts to restrict sex education curriculum across the state can negatively impact LGBTQAI+ students and the overall quality of sex education.
            `
          ),
        title: "North Carolina",
      },
      ND: {
        fill: "#FDB813",
        clickHandler: () =>
          setDescription(
            "North Dakota",
            `North Dakota schools are required to teach sex education through its health education course, which must be in alignment with the North Dakota Health Education Content Standards. The curriculum must be abstinence-based and include instruction on the risks associated with adolescent sexual activity and the benefits of abstaining from sexual activity before and outside of marriage. The curriculum is not required to include instruction on sexual orientation or gender identity or consent, although the North Dakota Health Education Content Standards includes discussion of sexual orientation in their definition of sexuality. There is no standard regarding the ability of parents and guardians to remove their children from sex education instruction, and North Dakota has no regulation regarding medically accurate sex education instruction. School districts are left to decide what quality of sex education they provide within the guidelines provided through the North Dakota Health Education Content Standards. This presents unique challenges that have resulted in disparities regarding the quality of sex education that students receive, with some districts relying entirely on abstinence-only programming. Advocates are encouraged to take action to address these barriers and improve access to sex education for young people in their district.
            `
          ),
        title: "North Dakota",
      },
      OH: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "Ohio",
            `Ohio schools are required to provide sexual health instruction on HIV/STIs through “venereal disease education”. The curriculum must emphasize abstinence, and it is not required to include instruction on sexual orientation or gender identity or consent. Upon written request of a parent or guardian, a student may be excused from receiving any or all sex education instruction. There is no regulation regarding medically accurate sex education in Ohio. Advocates can take action to ensure young people in their community have access to quality sex education by contacting their local school board and advocating for comprehensive, medically accurate, and inclusive sex education. Ohio law requires sex education to include instruction on abstinence, laws related to sexual activity with minors, healthy relationships, dating violence prevention, and personal safety and assault prevention. Curriculum is not required to be comprehensive, medically accurate, or include instruction on topics such as consent, sexual orientation or gender identity, or contraceptive options. Local control over sex education can lead to disparities in the quality of sex education that students receive. There is currently pending legislation related to sex education in Ohio, including House Bill 616, which seeks to prohibit discussion on sexual orientation and gender identity in grades K-3.
`
          ),
        title: "Ohio",
      },
      OK: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "Oklahoma",
            `In Oklahoma, schools are not required to teach sex education, but they are required to provide HIV/AIDS prevention instruction and health education. The curriculum must primarily instruct on abstinence, and if a school district chooses to teach sex education beyond the mandated HIV/AIDS and health education, all curricula and materials must be approved for medical accuracy by the state and by the district superintendent. Parents or guardians can submit written notification if they do not want their children to participate in any sexuality and HIV/AIDS courses. The curriculum is not required to include instruction on sexual orientation or gender identity, but it must highlight stigmatizing, false information such as “engaging in homosexual activity, promiscuous sexual activity, intravenous drug use, or contact with contaminated blood products is now known to be primarily responsible for contact with the AIDS virus.” The curriculum must also include instruction on consent. Oklahoma has no regulation regarding medically accurate sex education curriculum, but it does require HIV/AIDS prevention curriculum to be “medically accurate.” However, requiring factually incorrect information about same-sex relationships blatantly conflicts with this requirement.
`
          ),
        title: "Oklahoma",
      },
      OR: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            "Oregon",
            `Oregon schools are required to teach sex education, as mandated by the Human Sexuality Education Law of 2009, the Healthy Teen Relationship Act of 2013, the Child Sexual Abuse Prevention Law of 2015, and the revision of the Oregon Health Education Standards in 2016. The curriculum must be comprehensive but must also promote abstinence, recognize different sexual orientations, gender identities, and gender expression, and include instruction on consent. Additionally, the 2021 Menstrual Dignity Act requires school districts to provide free menstrual products for all menstruating students, in every student bathroom, in all public elementary, middle, and high schools in Oregon. Parents or guardians may remove their children from sex education instruction, which is referred to as an “opt-out” policy. Oregon law requires sex education to be medically accurate. However, advocates report that the quality of sex education students receive varies greatly depending on their school district, demonstrating the ongoing need for reform.
`
          ),
        title: "Oregon",
      },
      PA: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
            "Pennsylvania",
            `According to the Pennsylvania State of Sex Ed PDF, schools in Pennsylvania are not required to teach sex education. However, if a school district chooses to provide sex education, the curriculum must include instruction on STDs, including HIV, and stress abstinence. There is no requirement for instruction on sexual orientation or gender identity, and there are no regulations regarding medically accurate sex education instruction.
`
          ),
        title: "Pennsylvania",
      },
      RI: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "Rhode Island",
            `In Rhode Island, sex education is mandated through the "comprehensive school health education program." The curriculum must align with Rhode Island's Comprehensive Health Instructional Outcomes and the Health Literacy for All: The Rhode Island Health Education Framework. However, it is not required to align with the National Sex Education Standards. The curriculum must stress abstinence and include instruction on sexual orientation, gender identity, consent, and various types of dating violence.
A certified health educator, designated by the administrative head of the school, is responsible for administering the health education program. Parents must be notified about sex education classes and can submit a written request to view the curriculum. Students may be removed from instruction through written notification from the parent to the principal, known as an "opt-out" policy.
Rhode Island has taken incremental steps to advance sex education, with legislation like House Bill 7166 and Senate Bill 2285, which were ultimately unsuccessful. The state has also seen regressive attempts to restrict sex education, such as House Bill 7539.
Sex education in Rhode Island covers topics like reproduction, abstinence, dating and dating violence, marriage, parenthood, STDs, sexuality, sexual orientation, and gender identity. However, the curriculum is not required to be aligned with the National Sex Education Standards, which can present challenges in resource access and implementation, particularly for low-income districts.
Advocates can take action by contacting their local school board to determine sex education requirements and push for the inclusion of essential topics. They can also take action on pending legislation that seeks to advance or restrict sex education principles.
`
          ),
        title: "Rhode Island",
      },
      SC: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "South Carolina",
            `In South Carolina, public schools are required to provide sexually transmitted disease (STD) education starting in grade 6, but they cannot provide information on STDs to students before that time. HIV and AIDS education is not mandatory in the state. Reproductive health education is allowed for grades K-5 and required for grades 6-8, including topics such as STDs and pregnancy prevention. In grades 9-12, students must receive at least 750 minutes of reproductive health and pregnancy prevention education, presented in gender-segregated settings.
South Carolina law defines reproductive health education as instruction on human physiology, conception, prenatal care, childbirth, and postnatal care, but it doesn't include instruction on sexual practices outside marriage or practices unrelated to reproduction, except in the context of disease risk. Abstinence and the risks associated with sexual activity outside of marriage must be emphasized, and contraceptive information must be given in the context of future family planning. Schools cannot distribute contraceptives, and abortion can only be discussed in terms of potential complications, not as a birth control method.
Educators who violate the chapter provisions or fail to comply with the school board's curriculum can be dismissed. Private schools are not required to comply with South Carolina's sex education requirements under the state's comprehensive health education program. In 2020, a U.S. District Court declared unconstitutional a statute that prohibited discussions of alternative sexual lifestyles, as it discriminated against LGBTQ students.
Parents must be informed in advance of any sexuality-specific instruction and can opt their children out of health education classes. South Carolina doesn't require or suggest a specific curriculum, but the state's Standards for Health and Safety Education provide guidance for curriculum development. The standards emphasize abstinence but allow students to learn about prevention of STIs/STDs, HIV, AIDS, and unintended pregnancy. They also suggest discussing dating violence, domestic violence, sexual harassment, rape, sexual assault, sexual abuse, and consent, and teach refusal and negotiation skills to promote abstinence. Local school boards must appoint a 13-member advisory committee for curriculum development and provide staff development activities for educators participating in the comprehensive health program.
`
          ),
        title: "South Carolina",
      },
      SD: {
        fill: "#EE7F2D",
        clickHandler: () =>
          setDescription(
            "South Dakota",
            `Sex education is not currently mandated in South Dakota, but all schools are required to include instruction on abstinence under “character development instruction”. The state’s Health Education Standards require instruction on disease prevention, but curriculum is not required to include instruction on sexual orientation or gender identity, or consent. The ability of parents and guardians to remove their children from sex education instruction varies by school district. South Dakota has no regulation regarding medically accurate sex education. Recent legislation includes unsuccessful efforts to ban transgender students from using bathroom facilities that match their gender identity, and attempts to prohibit instruction on “gender dysphoria” in grades K-7. Local control over sex education presents unique challenges that have resulted in disparities in the quality of sex education that students receive, particularly for Native youth who face unique challenges in accessing quality sex education. Advocates are encouraged to take action to ensure young people in their community have access to quality sex education and to contact their representatives to discuss the critical need for advancing sex education requirements statewide.
`
          ),
        title: "South Dakota",
      },
      TN: {
        fill: "#FDB813",
        clickHandler: () =>
          setDescription(
            "Tennessee",
            `In Tennessee, state law (§ 49-6-1302, 49-6-1304, and 49-6-1305) requires local education agencies to develop and implement a family life education program that primarily promotes "sexual risk avoidance" through abstinence. These programs must adhere to a specific set of guidelines, including emphatically promoting abstinence regardless of a student's current or prior sexual experience, providing medically accurate information, encouraging students to communicate with trusted adults about sex, teaching refusal skills, addressing the benefits of raising children within a marital relationship, discussing the interrelationship between teen sexual activity and exposure to other risk behaviors, educating students on age of consent, puberty, pregnancy, childbirth, sexually transmitted diseases, financial and emotional responsibility of raising a child, teaching students how to identify and form healthy relationships, and providing instruction on the detection, intervention, prevention, and treatment of child sexual abuse.
The Tennessee Health Education Standards and the Tennessee Lifetime Wellness Curriculum Standards also include instruction on sexually transmitted infections, abstinence, and contraception.
Several legislative efforts in recent years have sought to restrict sex education, including the enactment of Senate Bill 1360, which requires all local education agencies to provide family life education with an "abstinence-only" focus, and Senate Bill 3310, known as the "Gateway Law," which prohibits sex education courses from including instruction on "gateway sexual activity" that encourages youth to engage in non-abstinent behavior.
Tennessee Code allows students to be removed from sex education classes upon written request from their parent or guardian, referred to as an "opt-out" policy.
`
          ),
        title: "Tennessee",
      },
      TX: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
            "Texas",
            `Texas schools are not required to teach sex education, but they are required to teach health education. If a school chooses to teach sex education, the curriculum must emphasize abstinence. Health education is an optional elective course in high school. As a part of health education, they must adhere to the standards within the Texas Essential Knowledge and Skills (TEKS) for Health Education, which require some instruction in anatomy, contraception, and STI prevention while emphasizing abstinence, otherwise known as a “abstinence-plus” curriculum. If a school chooses to teach sex education and uses a curriculum developed by the Texas Department of State Health Services (DSHS), it must state that homosexuality is not an acceptable lifestyle to the general public and that it is a criminal offense under the Texas Penal Code, regardless of the fact that the United States Supreme Court declared such laws unconstitutional in 2003. Curriculum is not required to include instruction on consent, and parents or guardians are required to provide their written consent prior to their children receiving sex education, known as an “opt-in” policy. Texas has no regulation regarding medically accurate sex education instruction. Advocates have worked to promote the adoption of updated instructional materials following the 2020 TEKS requirement updates, which added instruction on anatomy, contraception, condoms, and STI prevention in middle and high school, and added standards on healthy relationships and the importance of physical boundaries. However, recent legislation has reduced access to sex education, and advocates expect additional legislative attacks on sexual and reproductive rights, particularly for LGBTQAI+ youth.
            `
          ),
        title: "Texas",
      },
      UT: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "Utah",
            `In Utah, schools are required by state law to teach some form of sex education. This instruction must occur at least twice between 8th and 12th grades and must stress abstinence. However, the curriculum is not required to be comprehensive and is not required to include instruction on sexual orientation or gender identity or on consent, although it must include instruction on refusal skills. Parents or guardians must give written permission for a student to participate in any form of sex education. The curriculum must also be medically accurate.
Recent legislation in Utah has sought to advance sex education requirements in the state, but progress has been slow and met with opposition. Advocates for comprehensive sex education in Utah face challenges due to local control over curriculum, which can result in a lack of consistency and quality in sex education across districts. Disparities in sex education can also lead to stigmatization of marginalized youth, including LGBTQ+ students and students of color.
`
          ),
        title: "Utah",
      },
      VT: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "Vermont",
            `sex education is required in Vermont schools as part of their mandated "comprehensive health education" program in public schools. The curriculum must include instruction on sexuality and reproduction, STDs, decision-making skills, how to recognize and prevent sexual abuse and sexual violence, contraceptives, and outcomes of pregnancy including childbirth, adoption, and abortion. However, the curriculum does not require instruction on sexual orientation or gender identity.`
          ),
        title: "Vermont",
      },
      VA: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            "Virginia",
            `In Virginia, schools are not required to teach sex education, also known as family life education. However, if schools choose to teach sex education, they may follow the Family Life Education Guidelines and Standards of Learning developed by the Virginia Board of Education. This curriculum is not required to align with the National Sex Education Standards and must emphasize abstinence. Certain topics of the Family Life Education Guidelines and Standards of Learning must be taught if family life education is provided, such as dating violence, violence prevention, consent, and personal boundaries. The curriculum is not required to include instruction on sexual orientation or gender identity. Parents or guardians may remove their students from any class, which is referred to as an "opt-out" policy.
Washington
In Washington state, schools are required to provide comprehensive sex education that is medically accurate, scientifically based, age-appropriate, inclusive of all students regardless of sexual orientation or gender identity, and stresses the importance of consent. The Healthy Youth Act, passed in 2020, mandates sex education in public schools starting in the 2022-2023 school year. Curriculum must include instruction on affirmative consent and bystander training. Parents may opt their children out of the class with written notification. In addition, schools are required to provide instruction on HIV/AIDS prevention, stressing abstinence as the only certain means of prevention but also including information on condoms and other forms of birth control. The curriculum must be approved by the Washington Department of Health Office on HIV/AIDS to ensure medical accuracy. Advocates are encouraged to take action to ensure accountability and expand education for people with disabilities, as well as to stay vigilant against regressive policies seeking to roll back progress in sex education.
`
          ),
        title: "Virginia",
      },
      WA: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
            "Washington",
            `In Washington state, schools are required to provide comprehensive sex education that is medically accurate, scientifically based, age-appropriate, inclusive of all students regardless of sexual orientation or gender identity, and stresses the importance of consent. The Healthy Youth Act, passed in 2020, mandates sex education in public schools starting in the 2022-2023 school year. Curriculum must include instruction on affirmative consent and bystander training. Parents may opt their children out of the class with written notification. In addition, schools are required to provide instruction on HIV/AIDS prevention, stressing abstinence as the only certain means of prevention but also including information on condoms and other forms of birth control. The curriculum must be approved by the Washington Department of Health Office on HIV/AIDS to ensure medical accuracy. Advocates are encouraged to take action to ensure accountability and expand education for people with disabilities, as well as to stay vigilant against regressive policies seeking to roll back progress in sex education.
`
          ),
        title: "Washington",
      },
      WV: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "West Virginia",
            `West Virginia schools are required to teach sex education, but curriculum standards vary by school. The only mandatory topic that sex education must cover is HIV/AIDS prevention education in grades 6-12. Curriculum must include instruction on abstinence, but it is not required to include instruction on sexual orientation or gender identity or consent. Parents or guardians may remove their children from any part of this instruction by written notification to the principal, which is referred to as an “opt-out” policy. West Virginia has no regulation on medically accurate sex education. Local control over sex education presents challenges, resulting in disparities regarding the quality of sex education that students receive. Advocates are encouraged to take action to ensure young people in their community have access to quality sex education, including addressing the needs of marginalized youth, providing comprehensive instruction on contraceptive options, and promoting consent education. The West Virginia College- and Career-Readiness Standards for Wellness Education includes sexual health, but the state does not require any specific curriculum. Advocates can find more information on current legislative activity related to sex education and sexual health care services in the state through the SIECUS Community Action Toolkit and EducateUs. Data from the 2022 School Health Profiles show that 27.1% of West Virginia secondary schools taught students all 22 critical sexual health education topics in a required course in any of grades 6, 7, or 8, while 61.7% taught students all 22 critical sexual health education topics in a required course in any of grades 9, 10, 11, or 12.`
          ),
        title: "West Virginia",
      },
      WI: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "Wisconsin",
            `Sex education is not mandated in Wisconsin. However, if schools choose to teach it they must stress abstinence. Wisconsin schools are required to provide instruction on STDs. If a school chooses to provide human growth and development instruction, curriculum is required to stress abstinence and must be medically accurate. Curriculum is not required to include instruction on sexual orientation or gender identity, but Wisconsin’s state standards for human growth and development instruction include instruction on sexual orientation and gender identity. Curriculum is not required to provide instruction on consent, but Wisconsin’s state standards for human growth and development instruction include instruction on consent. Parents or guardians may remove their children from the human growth and development instruction with a written request to the teacher or principal. Recently, multiple bills concerning sex education have been introduced or carried over into 2022, including a bill that sought to require a video depicting an abortion procedure to be shown during sex education instruction. Advocates can take action to ensure young people in their community have access to quality sex education by contacting their local school board and representatives. Wisconsin law § 115.35 establishes a “Health Problems Education Program,” which includes instruction on sexually transmitted diseases (STDs) and human growth and development. While teaching about STDs is a required component, schools are no longer obligated to teach the human growth and development section due to a revision of Wisconsin law § 118.019 in 2012. An educational program in human growth and development must use instructional methods and materials that do not discriminate against a pupil based upon the pupil’s race, gender, religion, sexual orientation, or ethnic or cultural background or against sexually active pupils or children with disabilities. Schools that choose to provide instruction must provide annual notification to parents outlining the curriculum used for their child’s particular grade level, and parents and guardians must be given the opportunity to review all materials related to sex education classes.`
          ),
        title: "Wisconsin",
      },
      WY: {
        fill: "#EE7F2D",
        clickHandler: () =>
          setDescription(
            "Wyoming",
            `Wyoming schools are not required to teach sex education, and instead, it is up to the discretion of the school district. Sexuality is included in the state's mandated Health Education Content and Performance Standards, but there is no standard regarding instruction on abstinence, sexual orientation, gender identity, consent, or medically accurate sex education instruction. There is also no regulation on the ability of parents and guardians to remove their children from sex education instruction.
Advocates can take action by contacting their local school board and determining what topics are missing from sex education instruction, such as healthy relationships, sexual orientation and gender identity, consent, and contraceptives. They can then advocate for advancing sex education requirements in their community and take action on pending legislation that seeks to advance or restrict the principles of comprehensive sex education.
Wyoming statute § 21-9-101 requires each school district within the state to provide education in accordance with uniform standards and rules and regulations promulgated by the state board. In the Wyoming Health Education Content and Performance Standards, sexuality is defined as the sum of the physical, functional, and psychological attributes that are expressed by one's gender identity and sexual behavior. There is no specific curriculum indicated, and school districts are encouraged to develop policies and approve curriculum and other materials for school health education.
There has been no recent legislation introduced in Wyoming advancing or restricting sex education, but the state's local control over sex education presents unique challenges and disparities in the quality of sex education that students receive. Advocates are encouraged to use the SIECUS Community Action Toolkit to guide local efforts to advance sex education and to reach out to EducateUs to get connected to local advocacy groups.
`
          ),
        title: "Wyoming",
      },
    };
  };

  return (
    <div>
      <Navbar />
      <h1 className="title">Sex Education Map</h1>
      <div
        className="map"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <USAMap customize={statesCustomConfig()} />
      </div>
      <StateModal
        stateInfo={selectedState}
        onClose={() => setSelectedState(null)}
      />
    </div>
  );
}

export default Map;
