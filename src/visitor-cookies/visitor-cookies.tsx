const VISITOR_COOKIE = "VSC";

export const fetchVisitorCookie: () => string | null = () => {
    return localStorage.getItem(VISITOR_COOKIE  );
};

export const removeVisitorCookie: () => void = () => {
    localStorage.removeItem(VISITOR_COOKIE  );
};

export const storeVisitorCookie: (token: string) => void = (token) => {
    localStorage.setItem(VISITOR_COOKIE, token);
};