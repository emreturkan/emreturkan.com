import ILikeItPage from '@/components/page/i-like-it/page';
import {siteConfig} from '@/config/site';

export const metadata = {
    title: {
        default: 'I Like It | ' + siteConfig.title,
        template: '%s | ' + siteConfig.title
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords + ', I like it',
    url: siteConfig.url + '/i-like-it',
    author: {
        name: siteConfig.creator,
        url: siteConfig.url + '/i-like-it'
    },
    creator: siteConfig.creator
};

const ILikeIt = async () => {
    return <ILikeItPage />;
};

export default ILikeIt;
