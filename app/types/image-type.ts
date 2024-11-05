export type TImage = {
    id: string;
    width: number;
    height: number;
    links: {
        html: string;
    };
    urls: {
        small: string;
        regular: string;
    };
    alt_description?: string;
    user: {
        name: string;
        username: string;
    };
    blur_hash: string;
};
