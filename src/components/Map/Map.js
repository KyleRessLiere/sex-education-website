import React, { useState } from "react";
import USAMap from "react-usa-map";
import Navbar from "../Navbar/Navbar";

function Map() {
  /* optional customization of filling per state and calling custom callbacks per state */
  const statesCustomConfig = () => {
    return {
      AL: {
        fill: "#FDB813",
        clickHandler: () =>
          setDescription(
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
            `Arizona schools are not required to provide sex education to students. If a school chooses to teach sex education, it must stress abstinence. HIV education is not mandated, but if it is offered, the curriculum must be medically accurate. Curriculum is not required to include instruction on sexual orientation or gender identity, or instruction on consent. Parents or guardians must provide written permission for their children to participate in sex education. This is referred to as an “opt-in” policy. Recent legislative efforts have aimed to change Arizona’s “opt-in” policy to an “opt-out” policy and require sex education to be medically accurate and comprehensive, but these efforts have been unsuccessful so far. Local control over sex education presents unique challenges that have resulted in disparities in the quality of sex education that students receive. Advocates can take action to ensure young people in their community have access to quality sex education, such as investing in local school board races, building coalitions, and contacting local school boards to vocalize the need for advancing instruction requirements.
            `
          ),
        title: "Alaska",
      },
      AZ: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            `Arizona schools are not required to provide sex education to students. If a school chooses to teach sex education, it must stress abstinence. HIV education is not mandated, but if it is offered, the curriculum must be medically accurate. Curriculum is not required to include instruction on sexual orientation or gender identity, or instruction on consent. Parents or guardians must provide written permission for their children to participate in sex education. This is referred to as an “opt-in” policy. Recent legislative efforts have aimed to change Arizona’s “opt-in” policy to an “opt-out” policy and require sex education to be medically accurate and comprehensive, but these efforts have been unsuccessful so far. Local control over sex education presents unique challenges that have resulted in disparities in the quality of sex education that students receive. Advocates can take action to ensure young people in their community have access to quality sex education, such as investing in local school board races, building coalitions, and contacting local school boards to vocalize the need for advancing instruction requirements.
            `
          ),
        title: "Arizona",
      },
      AR: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            `Sex education is not currently mandated in Arkansas, but if offered, it must stress abstinence. Schools are not required to teach sex education or instruction on HIV or STIs. If sex education is offered, the curriculum must stress abstinence, but it is not required to include instruction on consent, sexual orientation or gender identity, or medically accurate information. Arkansas has no standard regarding the ability of parents and guardians to remove their children from sex education instruction. Students are required to complete 0.5 units of health and safety in order to graduate. In 2021, Arkansas enacted two regressive bills related to sex education, one prohibiting public schools or open-enrollment public charter schools from entering into any type of transaction with an individual or entity that provides abortion care, and the other requiring parental notification if sex education or instruction on sexual orientation or gender identity is provided. Local school districts are left to decide what type of sex education they provide, presenting challenges in ensuring that all students have access to quality sex education. Advocates can take action to ensure young people in their community have access to quality sex education by contacting their local school board and representatives, vocalizing the need for advancing sex education requirements, and using the SIECUS Community Action Toolkit.`
          ),
        title: "Arkansas",
      },
      CA: {
        fill: "#7C2D3A",
        clickHandler: () =>
          setDescription(
            `In California, sex education is mandated by state law under the California Healthy Youth Act (Education Code § 51933-51934). Schools must provide comprehensive, medically accurate, and culturally competent sex education to all students in grades 7-12 at least once in middle school and once in high school. The curriculum must be age-appropriate, objective, and inclusive of all races, genders, sexual orientations, ethnic and cultural backgrounds, disabilities, and English learners. It must also include information on abstinence and teach students about gender, gender expression, gender identity, and gender stereotypes. While consent education is not mandatory, instruction on healthy relationships must be provided to help students form relationships based on mutual respect and affection, free from violence, coercion, and intimidation. Parents or guardians may opt-out of sex education and STI/HIV education classes. Recent legislation, such as Assembly Bill 2586, aims to provide grants and resources for sex education organizations, but advocates report that implementation of existing laws and funding issues continue to create barriers to sex education for some students, particularly in rural and low-income communities. `
          ),
        title: "California",
      },
      CO: {
        fill: "#EE7F2D",
        clickHandler: () =>
          setDescription(
            `The requirements for sex education in Colorado are as follows: while sex education is not required, if it is offered, the curriculum must be comprehensive and medically accurate, and it must not emphasize sexual abstinence as the sole preventative method. The curriculum must include instruction on consent, and if pregnancy options are taught, abortion must be included as an option. Sex education must not exclude the health needs of LGBT or intersex individuals, must be age-appropriate, culturally sensitive, and taught in a cohesive, integrated, and objective manner. Parents or guardians can remove their children from sex education instruction with written notification. Finally, the Colorado Department of Education is responsible for providing guidelines as to the length of courses, the subjects included, and the manner in which these subjects are addressed.
            `
          ),
        title: "Colorado",
      },
      CT: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
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
            "The District of Columbia, also known as D.C., is the capital of the United States and home to many historic landmarks and government buildings."
          ),
        title: "District of Columbia",
      },
      DE: {
        fill: "#FDB813",
        clickHandler: () =>
          setDescription(
            `In Delaware, sex education is mandated as part of the Comprehensive Health Education Program required for students in grades K-12. The curriculum must be comprehensive, although it does not meet nationally recognized standards for sex education. It stresses abstinence and includes instruction on consent. However, it is not required to include instruction on sexual orientation or gender identity. There is no standard in the Delaware statute regarding the ability of parents and guardians to enroll or remove their children from sex education instruction, nor is there a standard for medically accurate sex education instruction. Nevertheless, the curriculum on consent must be evidence-informed. In order to graduate from high school, students must receive 0.5 credits of comprehensive health education.`
          ),
        title: "Delaware",
      },

      FL: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
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
            `In Georgia, schools are required by Georgia Code Annotated §§ 20-2-143 to teach sex education and AIDS prevention education. The state board of education is responsible for determining the minimum guidelines that sex education programs must adhere to. These guidelines emphasize abstinence from sexual activity until marriage and fidelity in marriage as important personal goals. Georgia Board of Education Rule 160-4-2-.12 states that sex education instruction should address peer pressure, promote high self-esteem, local community values, and abstinence from sexual activity as an effective method of preventing pregnancy, STIs, and AIDS. Local school boards have significant authority in deciding specific subjects to be covered, age-appropriate messaging, and the grade level in which topics are introduced. Parents or guardians can opt their children out of all or part of sex and/or STI/HIV education by providing written notice to the school.
            `
          ),
        title: "Georgia",
      },
      HI: {
        fill: "#EE7F2D",
        clickHandler: () =>
          setDescription(
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
            `Sex education is not mandated in Idaho, but schools that offer it must emphasize abstinence. The curriculum is not required to include instruction on sexual orientation or gender identity, or on consent. Parents or guardians can opt their children out of sex education instruction by filing a written request with the school board. Local school districts have control over sex education, resulting in a wide variation in the quality of sex education provided. Advocates report challenges in advancing sex education due to the embroiled political climate in Idaho, minimal health education requirements, and a lack of resources. The Idaho Department of Education’s health education standards state that growth, development, and family life instruction should be medically accurate. Advocates are encouraged to take action on pending legislation related to sex education and to use resources such as the SIECUS Community Action Toolkit and EducateUs to get connected to local advocacy groups.`
          ),
        title: "Idaho",
      },
      IL: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            `Illinois schools are not required to teach sex education, but if they choose to do so, it must be age and developmentally appropriate, medically accurate, complete, culturally appropriate, inclusive, trauma-informed, and replicate evidence-based or evidence-informed programs. The curriculum must include instruction on sexual orientation or gender identity, as well as on consent. Parents or guardians may opt their children out of any or all sex education, family life programs, and/or STD/HIV prevention programs. Recent legislation, such as Senate Bill 818, requires comprehensive sex education in schools that offer it, but there are still attempts to restrict or eliminate sex education, such as House Bills 5349 and 5494. Advocates continue to work towards a statewide mandate for sex education, as local control has resulted in disparities in the quality of sex education provided. Organizations such as Planned Parenthood of Illinois, Equality Illinois, and the ACLU of Illinois are working towards advancing sex education in the state. Youth sexual health data is not provided in the given information.`
          ),
        title: "Illinois",
      },
      IN: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            `Sex education is not currently mandated in Indiana, except for instruction on HIV. The curriculum for sex education must stress abstinence as the expected social standard, and it is not required to be medically accurate, evidence-based, or comprehensive. School districts are responsible for deciding whether to provide sex education to their students and what type of curriculum to use. Indiana has no regulation regarding medically accurate sex education instruction. However, schools are required to make two attempts to receive written permission from parents or guardians before automatically enrolling students in sex education. Curriculum is not required to include instruction on sexual orientation or gender identity or consent. Advocates have faced challenges in advancing sex education requirements in Indiana, including regressive legislation aimed at restricting or prohibiting instruction on certain topics. Therefore, advocates must take action to ensure that young people in their community have access to quality sex education.
            `
          ),
        title: "Indiana",
      },
      IA: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            `Sex education is mandated in Iowa and must be research-based and age-appropriate, but it is not required to align with the National Sex Education Standards. Abstinence-based or abstinence-only materials are permitted as long as they fall within the parameters of the law, but there is no standard regarding the inclusion of abstinence in the curriculum. Sex education instruction must be free of bias based on race, ethnicity, sexual orientation, or gender. Curriculum is not required to include instruction on consent. Parents or guardians may remove their children from any part of health education courses if the course conflicts with the student’s religious beliefs, which is referred to as an “opt-out” policy. Sex education curriculum must be medically accurate. Advocates have introduced several bills in 2022 to improve sex education requirements, including instruction on topics such as consent, healthy relationships, sexual assault prevention, and LGBTQAI+ identities. However, several bills have also been introduced to restrict sex education and discussions of sexual orientation and gender identity in the classroom. Local control over sex education presents unique challenges that have resulted in a disparity regarding the quality of sex education that students receive. Advocates can take action to ensure young people in their community have access to quality sex education by contacting their local school board, determining what topics are missing from sex education instruction, and vocalizing the need for advancing sex education requirements in their community.
            `
          ),
        title: "Iowa",
      },
      KS: {
        fill: "#EE7F2D",
        clickHandler: () =>
          setDescription(
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
            `Kentucky requires students to take 0.5 credits of health education in order to graduate, including instruction on responsible sexual behavior, such as abstinence and preventing pregnancy, preventing STDs, and the basic reproductive system and functions. However, local school boards have the discretion to identify any additional curriculum schools provide, and there is no requirement for curriculum to be medically accurate, culturally responsive to the needs of young people of color, or include instruction on topics such as sexual orientation, gender identity, consent, healthy relationships, or contraceptive options. Advocates report that the current state standards are so vague that educators are often unsure of what they are permitted to teach, and as a result, opt to not teach sex education at all. Additionally, there is a law requiring abstinence to be taught as the “desirable goal” for young people. In 2018, Kentucky enacted a law stating that any human sexuality or STD curricula must include instruction on abstinence, state that “abstinence from sexual activity is the desirable goal for all school-age children,” and advocate for “permanent mutually faithful monogamous relationship[s].
`
          ),
        title: "Kentucky",
      },
      LA: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
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
            `In Maryland, schools are required to teach sex education, but the curriculum does not need to align with the National Sex Education Standards. The curriculum must emphasize abstinence as the best method for preventing unintended pregnancies and STIs. It must also include inclusive instruction on sexual orientation and gender identity, as well as consent education. Parents or guardians have the right to review all instructional materials before they are used and can choose to remove their children from any or all "Family Life and Human Sexuality" classes, which is known as an "opt-out" policy. Instruction on contraception and condoms must be medically accurate. Advocates continue working to advance sex education in the state, with recent legislation introduced to include age-appropriate sexting education and efforts to promote inclusive curriculum, such as the history of LGBTQAI+ and disability rights movements.
`
          ),
        title: "Maryland",
      },
      MA: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
            "Massachusetts is a state located in the northeastern region of the United States, known for its historic landmarks and cultural attractions."
          ),
        title: "Massachusetts",
      },
      MI: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "Michigan is a state located in the Great Lakes region of the United States, known for its natural beauty and automotive industry."
          ),
        title: "Michigan",
      },
      MN: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "Minnesota is a state located in the northwestern region of the United States, known for its natural beauty and outdoor recreational activities."
          ),
        title: "Minnesota",
      },
      MS: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            "Mississippi is a state located in the southeastern region of the United States, known for its historic sites and blues music."
          ),
        title: "Mississippi",
      },
      MO: {
        fill: "#EE7F2D",
        clickHandler: () =>
          setDescription(
            "Missouri is a state located in the central region of the United States, known for its scenic beauty and unique cultural attractions."
          ),
        title: "Missouri",
      },
      MT: {
        fill: "#FDB813",
        clickHandler: () =>
          setDescription(
            "Montana is a state located in the northwestern region of the United States, known for its rugged wilderness and outdoor recreational activities."
          ),
        title: "Montana",
      },
      NE: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "Nebraska is a state located in the central region of the United States, known for its wide open spaces and unique cultural attractions."
          ),
        title: "Nebraska",
      },
      NV: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "Nevada is a state located in the southwestern region of the United States, known for its desert landscapes and bustling cities."
          ),
        title: "Nevada",
      },
      NH: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            "New Hampshire is a state located in the northeastern region of the United States, known for its quaint towns and beautiful natural landscapes."
          ),
        title: "New Hampshire",
      },
      NJ: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
            "New Jersey is a state located in the northeastern region of the United States, known for its beaches and boardwalks."
          ),
        title: "New Jersey",
      },
      NM: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "New Mexico is a state located in the southwestern region of the United States, known for its vibrant culture and stunning natural beauty."
          ),
        title: "New Mexico",
      },
      NY: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "New York is a state located on the East Coast of the United States, known for its iconic landmarks and bustling cities."
          ),
        title: "New York",
      },
      NC: {
        fill: "#EE7F2D",
        clickHandler: () =>
          setDescription(
            "North Carolina is a state located in the southeastern region of the United States, known for its beautiful beaches and mountainous landscapes."
          ),
        title: "North Carolina",
      },
      ND: {
        fill: "#FDB813",
        clickHandler: () =>
          setDescription(
            "North Dakota is a state located in the northwestern region of the United States, known for its wide open spaces and friendly people."
          ),
        title: "North Dakota",
      },
      OH: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "Ohio is a state located in the Midwestern region of the United States, known for its historic sites and scenic beauty."
          ),
        title: "Ohio",
      },
      OK: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "Oklahoma is a state located in the central region of the United States, known for its Native American heritage and scenic beauty."
          ),
        title: "Oklahoma",
      },
      OR: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            "Oregon is a state located in the northwestern region of the United States, known for its natural beauty and outdoor recreational activities."
          ),
        title: "Oregon",
      },
      PA: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
            "Pennsylvania is a state located in the northeastern region of the United States, known for its historic landmarks and beautiful countryside."
          ),
        title: "Pennsylvania",
      },
      RI: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "Rhode Island is a state located in the northeastern region of the United States, known for its historic landmarks and beautiful coastline."
          ),
        title: "Rhode Island",
      },
      SC: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "South Carolina is a state located in the southeastern region of the United States, known for its historic sites and beautiful beaches."
          ),
        title: "South Carolina",
      },
      SD: {
        fill: "#EE7F2D",
        clickHandler: () =>
          setDescription(
            "South Dakota is a state located in the northwestern region of the United States, known for its natural beauty and historic landmarks."
          ),
        title: "South Dakota",
      },
      TN: {
        fill: "#FDB813",
        clickHandler: () =>
          setDescription(
            "Tennessee is a state located in the southeastern region of the United States, known for its music, culture, and natural beauty."
          ),
        title: "Tennessee",
      },
      TX: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
            "Texas is a state located in the southern region of the United States, known for its cowboy culture, oil industry, and delicious barbecue."
          ),
        title: "Texas",
      },
      UT: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "Utah is a state located in the western region of the United States, known for its stunning natural beauty and outdoor recreational activities."
          ),
        title: "Utah",
      },
      VT: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "Vermont is a state located in the northeastern region of the United States, known for its beautiful countryside and delicious maple syrup."
          ),
        title: "Vermont",
      },
      VA: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            "Virginia is a state located in the southeastern region of the United States, known for its historic landmarks and beautiful beaches."
          ),
        title: "Virginia",
      },
      WA: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
            "Washington is a state located in the northwestern region of the United States, known for its natural beauty and bustling cities."
          ),
        title: "Washington",
      },
      WV: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "West Virginia is a state located in the northeastern region of the United States, known for its scenic beauty and outdoor recreational activities."
          ),
        title: "West Virginia",
      },
      WI: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "Wisconsin is a state located in the Midwestern region of the United States, known for its natural beauty and cheese production."
          ),
        title: "Wisconsin",
      },
      WY: {
        fill: "#EE7F2D",
        clickHandler: () =>
          setDescription(
            "Wyoming is a state located in the western region of the United States, known for its rugged wilderness and outdoor recreational activities."
          ),
        title: "Wyoming",
      },
    };
  };

  const [description, setDescription] = useState("");

  const mapHandler = (event) => {
    alert(event.target.dataset.name);
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
        <USAMap onClick={mapHandler} customize={statesCustomConfig()} />
      </div>
      <div className="description">{description && <p>{description}</p>}</div>
    </div>
  );
}

export default Map;
