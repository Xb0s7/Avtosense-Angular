// import { FaEnvelope, FaUserEdit, FaWarehouse, FaWrench } from 'react-icons/fa';
import { faEnvelope, faUserEdit, faWarehouse, faWrench } from "@fortawesome/free-solid-svg-icons";
export const NAVIGATION_ITEMS = [
    {
        label: 'Home',
        tooltip: 'Начало',
        id: 'intro-section',
        marginHeight: 0,
        icon: faWarehouse
    },
    {
        label: 'Услуги',
        tooltip: 'Услуги',
        id: 'services-section',
        marginHeight: 0,
        icon: faWrench
    },

    {
        label: 'Testimonials',
        tooltip: 'Ревюта',
        id: 'reviews-section',
        marginHeight: 0,
        icon: faUserEdit
    },
    {
        label: 'Contact us',
        tooltip: 'Контакти',
        id: 'contact-section',
        marginHeight: 0,
        icon: faEnvelope
    },
];
