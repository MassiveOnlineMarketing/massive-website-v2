import { Accordion, AccordionContainer, AccordionContent, AccordionHeader } from '@/features/accordion'
import { constants } from '@/styles/styles'
import React from 'react'

const Faq = () => {
  return (
    <div>
      <AccordionContainer>
        {ACCORDION.accordion.map((item, index) => (
          <Accordion key={index} className={`${constants.glassFill} rounded-xl shadow-custom-lg backdrop-blur-md test-gradient`} >
            <AccordionHeader level='h3' size='lg' className="rounded-lg text-gray-800 p-4 font-medium" activeClassName='text-primary'>{item.header}</AccordionHeader>
            <AccordionContent >{item.content}</AccordionContent>
          </Accordion>
        ))}

      </AccordionContainer>
    </div>
  )
}

export default Faq

const ACCORDION = {

  accordion: [
    { header: "Wat maakt Massive Online Marketing uniek in de digitale marketingwereld?", content: "Massive Online Marketing onderscheidt zich door onze unieke combinatie van creativiteit, innovatie, en data-gedreven strategieën. Onze toewijding aan transparantie, klantgerichte aanpak, en het aanbieden van op maat gemaakte oplossingen stelt ons in staat om unieke en effectieve digitale marketingstrategieën te ontwikkelen die echt resoneren met uw publiek." },
    { header: "Hoe kan Massive Online Marketing mijn bedrijf helpen groeien?", content: "We helpen uw bedrijf groeien door een holistische benadering van digitale marketing. Dit omvat het ontwikkelen van een sterke online aanwezigheid via website- en e-commerce-ontwikkeling, SEO en SEA strategieën, en innovatieve online marketingcampagnes. We richten ons op het leveren van meetbare resultaten en duurzame groei." },
    { header: "Biedt Massive Online Marketing ook ondersteuning na de lancering van een project?", content: "Ja, we bieden voortdurende ondersteuning en begeleiding na de lancering van elk project. Onze focus ligt op het bouwen van langdurige relaties met onze klanten, en we streven ernaar om uw digitale marketinginspanningen voortdurend te optimaliseren voor aanhoudend succes." },
    { header: "Hoe benadert Massive Online Marketing projecten voor verschillende industrieën?", content: "We benaderen elk project met een frisse blik, volledig afgestemd op de specifieke behoeften en uitdagingen van uw industrie. Onze diversiteit en ervaring stellen ons in staat om strategieën te creëren die aansluiten bij uw unieke marktpositie en doelgroep." },
    { header: "Welke technologieën en tools gebruikt Massive Online Marketing om resultaten te leveren?", content: "We gebruiken een scala aan geavanceerde digitale marketingtools en technologieën, waaronder de nieuwste in SEO en SEA, content management systemen, data-analyse en inzichten, en creatieve design software. Deze tools stellen ons in staat om effectieve, data-gedreven strategieën te ontwikkelen en uit te voeren." },
    { header: "Hoe meet Massive Online Marketing het succes van hun digitale marketingcampagnes?", content: "We meten het succes van onze campagnes door een reeks van prestatie-indicatoren en analytics te gebruiken. Dit omvat, maar is niet beperkt tot, websiteverkeer, engagement, conversiepercentages, en ROI. We bieden regelmatige rapportages en analyses aan onze klanten om de effectiviteit van onze strategieën te tonen." },

  ]
}