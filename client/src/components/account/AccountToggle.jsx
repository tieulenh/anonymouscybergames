import { User } from "lucide-react";

const AccountToggle = (
    { 
        isLoggedIn, 
        setIsMenuOpen, 
        user, 
        className,
        styleModule,
        ...props 
    }
) => {
    return (
        <div
                className={`avatar_ico ${className || ''} ${styleModule?.avatar_ico || ''}`} 
                onClick={setIsMenuOpen}
            >
                {isLoggedIn ? (
                    <img 
                        src={user?.avatarUrl || null}
                        style={{
                            width: '100%',
                            aspectRatio: '1/1',
                            objectFit: 'cover'
                        }}
                    />
                ) : (
                    <User 
                        style={{
                                width: '100%',
                                aspectRatio: '1/1',
                                objectFit: 'cover'
                            }}
                    />
                )}
            </div>
    );
}

export default AccountToggle;