// import Image from "next/image";
// import React from "react";
// import { WhatsappCommunicationSectionData } from "../../types";
// import { ArrowRightIcon } from "@/icons";

// interface Props {
//   data: WhatsappCommunicationSectionData;
// }

// const WhatsappCommunicationSection: React.FC<Props> = ({ data }) => {
//   return (
//     <section
//       className="mobile-padding-top-0 paddingOnMobile2 sectionPadding bg-center bg-no-repeat bg-cover"
//       style={{ backgroundImage: `url(${data.backgroundImage})` }}
//       id="benefitsSection"
//     >
//       <div>
//         <div className="container px-5 mx-auto xl:px-0">
//           <div className="flex flex-col justify-center">
//             <div className="row appMain p-6 border rounded-lg border-b-600 bg-gd-tertiary aos-init aos-animate not rowGap">
//               <div className="col-lg-9 p-lg-0 appMainFirst social_content">
//                 <div className="p-5">
//                   <h2 className="text-light mt-1 headingSize">
//                     {data.heading}
//                   </h2>
//                   <p className="text-light">{data.description}</p>
//                   <div>
//                     <a
//                       href="javascript:void(0);"
//                       className="w_fit buttonAnimation2 green inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent border rounded-full border-tropical-indigo text-w-900 hover:bg-tropical-indigo open-modal-btn"
//                       data-modal-target={data.buttonModalTarget || "#welcomeModal"}
//                     >
//                       {data.buttonText}
//                       <ArrowRightIcon />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-3 p-md-0 appMainFirst">
//                 <div>
//                   <Image loading="lazy"
//                     width={800}
//                     height={600}
//                     className="botImage"
//                     src={data.image}
//                     alt="bot"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatsappCommunicationSection;
