import React from "react";

import { images } from "../../constants";

const About = () => {
  return (
    <div id="about">
      <div className="mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 ">
        <div className="sm:flex justify-between items-center">
          <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0">
            Qui sommes-nous?
          </h3>
        </div>
        <p>
          <em><b>CodeCollab</b></em> est une plateforme dédiée à l'entraide et à la
          collaboration entre étudiants en génie logiciel, TIC, 3IL, et tout
          étudiant passionné d'IT. <br />
          Elle offre un espace où les étudiants peuvent partager des
          connaissances, résoudre des problèmes de programmation ensemble et
          développer leurs compétences techniques.
        </p>
        <div className="grid grid-cols-2 gap-4">
          

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={images.collaboration_1} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={images.code_snippet_2} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={images.mentoring_1} alt="" />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={images.code_snippet_1} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={images.mentoring_2} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={images.code_snippet_3} alt="" />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={images.mentoring_3} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={images.code_snippet_5} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={images.collaboration_2} alt="" />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={images.code_snippet_4} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={images.collaboration_4} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={images.collaboration_3} alt="" />
                    </div>
                </div>
            </div>

            <div>
                <b>CodeCollab</b> est dotée de 
                <ul className="list-disc list-outside">
                    <li className="mt-3 text-justify">
                        <em><b>Forum de discussion</b></em> : Les étudiants peuvent poser des questions, partager des conseils et discuter de sujets liés à la programmation, 
                        aux langages de programmation, aux frameworks, aux outils de développement, etc. Ils peuvent également participer à des discussions sur 
                        des sujets spécifiques et bénéficier de l'expérience des autres membres.
                    </li>
                    <li className="text-justify">
                        <em><b>Bibliothèque de code</b></em> : Les étudiants peuvent contribuer à une bibliothèque de code où ils peuvent partager des snippets, 
                        des exemples de code et des solutions pour des problèmes de programmation courants. Les utilisateurs peuvent rechercher des codes 
                        réutilisables et trouver des solutions à leurs propres défis de programmation.
                    </li>
                    <li className="text-justify">
                        <em><b>Système de mentorat</b></em> : Les étudiants plus avancés ou des professionnels du génie logiciel peuvent s'inscrire en tant que mentors
                        et offrir leur expertise pour aider les étudiants débutants. Les mentors peuvent donner des conseils personnalisés, guider les 
                        étudiants dans leurs projets et leur fournir des ressources supplémentaires.
                    </li>            
                    
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
