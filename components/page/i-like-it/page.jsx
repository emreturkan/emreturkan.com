import {Card, CardContent, CardDescription} from '@/components/ui/card';
import Link from 'next/link';
import {getGameBookmark} from '@/lib/actions/get-bookmark';
import ConvertDate from '@/lib/date';
import useTagIcon from '@/lib/useTagIcon';
import {Dot} from 'lucide-react';
import Image from 'next/image';
import {NeonGradientCard} from '@/components/ui/magicui/neon-gradient-card';

const ILikeItPage = async () => {
    const accessToken = await getAccessToken();

    const getGameBookmarks = await getGameBookmark(accessToken?.access_token);

    return (
        <div>
            <Card className="mb-8 rounded border  p-4 py-2  shadow-md">
                <CardContent>
                    <p className=" text-sm">
                        On this page, I record the games and ideas of people who
                        develop games that I like.
                    </p>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-4">
                {getGameBookmarks?.items?.map(bookmark => (
                    <NeonGradientCard
                        className="cursor-pointer"
                        href={bookmark.link}
                        key={bookmark._id}
                    >
                        {bookmark && (
                            <CardContent>
                                <div className="flex items-start gap-4 py-4">
                                    <Image
                                        src={bookmark.cover}
                                        alt={bookmark.title}
                                        width={100}
                                        height={100}
                                        className="h-24 w-24 rounded-lg object-cover shadow"
                                    />
                                    <div className="grid gap-2 ">
                                        <Link
                                            href={bookmark.link}
                                            target="_blank"
                                        >
                                            <h3 className="text-primary text-sm font-semibold transition duration-300 ease-in-out hover:text-blue-600 md:text-base">
                                                {bookmark.title}
                                            </h3>
                                        </Link>
                                        <CardDescription className="text-xs">
                                            {bookmark.excerpt}
                                        </CardDescription>
                                        <div className="text-secondary-foreground flex items-center gap-2">
                                            {useTagIcon(bookmark.tags[0])}
                                            <div className="flex flex-wrap items-center">
                                                <div className="text-xs md:text-sm">
                                                    {bookmark.domain}
                                                </div>{' '}
                                                <Dot />
                                                <div className="text-xs md:text-sm">
                                                    {ConvertDate(
                                                        bookmark.created
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        )}
                    </NeonGradientCard>
                ))}
            </div>
        </div>
    );
};

export default ILikeItPage;

const getAccessToken = async () => {
    try {
        const response = await fetch('https://emreturkan.com/api', {
            method: 'POST',
            next: {
                revalidate: 3600
            }
        });

        if (!response.ok) {
            throw new Error('Failed to refresh token');
        }

        const result = await response.json();

        return result;
    } catch (err) {
        console.error(err);
    }
};
