import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10 md:py-20 bg-white dark:bg-background-dark/50">
      <div className="flex flex-col max-w-6xl flex-1">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-[#111318] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] pb-10 md:pb-16 text-center">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 md:gap-16 w-full">
            {/* Left Column: Image and Bio */}
            <div className="flex flex-col gap-8 lg:col-span-2 items-center lg:items-start">
              <div className="w-60 h-60 md:w-72 md:h-72 aspect-square rounded-xl flex shadow-xl">
                <div 
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-xl flex-1" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzodl-SBQjw0oNUJWPHTKnUHES_khv3KJDlenXgd34It1vWdFbtfaBYhlTP171aVtj9WenEYeE9ArwWZSYGUbTklRPo3Up9sXp1T6dW1gKzyVeXsxH5IDB9bvlfUlIFCSXupMJgTHYoOy2Xq-0mybYdP-PWMswa5X5acpwnUzyhE8q5A5l-P7MkCHHxX4VL3FAP3FUxbPHSJQ75xn9PvX-y8VoD9_z3P0yzzfS9C2IOB0gwADd6j8Qx5DdSYBxjKltTso57ylPCE4")'}}
                ></div>
              </div>
              
              <h1 className="text-[#111318] dark:text-white text-2xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] text-left">My Story</h1>
              <p className="text-[#111318] dark:text-slate-300 text-base font-normal leading-normal text-left">
                I'm a passionate full-stack web developer with a knack for building dynamic and user-friendly web applications. My journey in tech started with a Bachelor of Computer Applications, and since then, I've been dedicated to mastering modern technologies to create seamless digital experiences. I thrive in collaborative environments, applying Agile methodologies to deliver efficient and robust solutions.
              </p>
            </div>

            {/* Right Column: Education and Skills */}
            <div className="flex flex-col gap-8 lg:col-span-3">
              
              {/* Education */}
              <div>
                <h1 className="text-[#111318] dark:text-white text-2xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] text-left pb-3">Education</h1>
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-background-dark rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <span className="material-symbols-outlined text-primary text-2xl">school</span>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-[#111318] dark:text-white">Bachelor of Computer Applications</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">BCA Graduate</p>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-[#111318] dark:text-white text-2xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] text-left pb-3">My Tech Stack</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {techStack.map((tech) => (
                        <div key={tech.name} className="flex items-center gap-3 p-3 bg-white dark:bg-background-dark rounded-lg border border-slate-200 dark:border-slate-700">
                            {tech.img ? (
                                <img alt={`${tech.name} logo`} className="h-6 w-6" src={tech.img} />
                            ) : (
                                <span className="material-symbols-outlined text-primary text-2xl">{tech.icon}</span>
                            )}
                            <span className="text-sm font-medium text-[#111318] dark:text-slate-300">{tech.name}</span>
                        </div>
                    ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const techStack = [
    { name: "React.js", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYNgaSy0MqUlBVtzafOSILS0RVbC04tcquPGNlnKSqCODWJNQm5-9w1RxbR3OBXpzgnWodOUUaIrTiXi9o7mZOl-ZjqfAiv1WmEVK4bzxcTFGJ3lU6NftanEWWabrIFftBdHqrA7dAaMUvcPGrPpAeVWcs6KtPJjxibmGgrqdDTCEbZyc8vpAaxiksL32F4IqKJw72AffZA4-JRyfKVp9QwZsayHHJqQcCD8jsio6R0_23fpG16UbDveYUiERPgGKyK2tU4xY4GQw" },
    { name: "Next.js", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdB_WCq2K9yaP4srYQ0hDvOfK_mykM4iFqf7cAedDIYhXgzCFwde4cV7MooHnICJbxxm1yuxgQkG5lBMQ7LiEks81AAS_6s41-eyhoSXgYAcE1pAmBc_HTlRvtzKTLHW-sQdo-w8FFrYGKD1k7chVUwKSKGwSEQ3mh8D_9EkZUABGX1OWtKwiaYM8na94K6wIOcTbBO5M9zcWWCV7ddLeasq8zTUJH-aO_kcsFgIvxE9_68wmuydYYCkcXtyS3GcYI-UeD0yFzcDM" },
    { name: "Angular", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhYjVVxPJaZfDKxVI5mqXuEBJQy5AfVF3ZED8gwbi7VfEfIkMEhY1HjwhxvtzYhTl318gxULc3DP6tKPParEE3yn6U4qxZuIPH0ytgsamy2hjqtBOLnmRHUCRcoFqhZEXY9uz6dRc7abncnT-x4N_nDNyT65xl3rQXkaQUUuFEuIgrkpjPMSYXO2Yefe-xesoBJs0y1kyzWOgW6TdZ6uylXOopjbbKPYyog0GiSbp4L3bZiNxbNwosUiQlIbt638gcvp8U9KI4xwA" },
    { name: "Node.js", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpembGRrbWnHwSn9fmGUg7Lmn2UZPedpaZDv5EgW7C8_Iqm5Q-KRctIUAnb_bXab1MjeDo9OY2vf7dTF4fgR29Vm4t8DOHg3GnQ0RpMyy13wUXLImCprP2Inr7AC6m27iSijXfOvb57vjlwRjhYO3L_NKLpnVagqbTuXHs5JwdeOMjZ72Gjxtl9TrofaR5arv6XqkIazaH4gZ_pK3hM8kj7rBM-ilGnQREo-aS92k1XAF2o5vuV5RI_l1PQ2HUZ9Oy1fq9GQ1Ss4I" },
    { name: "Express.js", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKcMPJOlesivJ9wJKALC_kGBlqtnlUZkF7SogpUBa-Can9K2_UOEEAFds5C3CSdMpgydOR2Ur6M5DqEt2m_bekcx-XKOX0rYHVvuuU8zs33ldc9nvdS6uhROF56juhSvnJomYnfI54aw3ENqaVmzQmEwgyDAGc2XgrBqyDtlkk7bHRsWr5VFkwVsJp1yvvXAdPrH6fEJeYRBa-d6ppAZ2CyFf89e13t2foYY0MTnorlWV9ApQKmBX2LQnBfNCF2lLLX8OXSPki50w" },
    { name: "MongoDB", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWx_FAiAY5wx488Kd5_3sow4RQnbvVID4DfXYtcO3us0rEuSPQJ5dl3lP1ovJfGl1IG6AGBrljc9YWL360PZNrFsTzp-5laThsQZ6i_ieXh9d1x2Xq8fmuIV8xscCOQveemHgYLGv2bFCq0Udbq2LwJUjsbcN8IvAAC6eOEpmxUnwPs5NrObF4mKfg2HzC5K-88xVEHTIoK0s9SbrTdJgPe09Hg_37vNqIpULwJLXfGLLnNx84ICOx7nW_13leeyy4VquEazMyD20" },
    { name: "Tailwind CSS", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuApYFF9KywNaokaR32dyoDpmicMIfWY4FHz1ubHKc_0SjF4sKaAwKC5Y5KX2fLRc6z5-EMBijBHvHpTyNFJXwdrlvUv0kwnDLRR-yCgC8Hmqdyg5I0lHB1gvChQjf_KR4KtYBcnKHSVWSqQZ8wmzW7G_iP_eYBuNp-Py3neJb_HJBNCW_EJiSfS7j2wgjRRm_ovtH8USO5Dc_qysb_H2ZM_n-OkutGGIMrjvS3beGhKYuhgyGauJZA3FDBjQdoF0BH9VA1LP43BBtw" },
    { name: "Bootstrap", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPuAMOl0-0E9nChjMWuFQZ-RA9M7wLGenWYWMx3IlAGVy7W-KI_gVaef4OMmwQKSNqDKV-bYg5z2TNkYLYmEENmFBZyI7NRQHyQUdfNR420BsPaOPqihPj3KeDH1iMo_ez-77XDSNfmjScvfMRIfut9oyVDb7CTERk_4E1In3vLLF583QE20NyQo-h024i6sxIF7AJL6citnk0D3Z2_HuE6EB7-xzF3Btb-qV2Hi_5Q7hGv_oxqykHNe_YXGXZyGxLRkbDFEXeIok" },
    { name: "Git", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdmlWjjrgEi8sRB6BWjHyNkOEi9cnKNGw1kRvTP6j15fy_vdU7i1AEagypX40sszMuv8jOZb5ochcjCRZXcrFShIwOT4xaLWzzU4rCLjMxywSI-QsbSz1SqvMqEVIdvTxSUXtHhrZSv6EouS6u7cpy3mmKPbZLWunaBkUh5-EB_zZU0LnfUDHRFDUbvpFp-R6wV1FxDYMe8IwjZr_h6lvUtQJlPhCSLxisbmQRkM1kjv2bUEpOuQKkkLm8S7a5cynHX1yu4B8WPDg" },
    { name: "RESTful APIs", icon: "api" },
    { name: "Agile/Scrum", icon: "groups" },
    { name: "MERN Stack", icon: "data_object" },
];