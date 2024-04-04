import LocationSvg from "../assets/location.svg?react";
import PhoneSvg from "../assets/phone.svg?react";

export const CONTACT_ITEMS = [
    {
        text: 'Zapad Mladost, ul. "Perla" 16 9009 Varna Bulgaria',
        Icon: () => <LocationSvg class="contact-img" />
    },
    {
        text: '+359 87 882 9663',
        Icon: () => <PhoneSvg class="contact-img" />
    },
    {
        text: '+359 89 362 6233',
        Icon: () => <PhoneSvg class="contact-img" />
    },
    {
        text: '+359 88 835 1014',
        Icon: () => <PhoneSvg class="contact-img" />
    },
];