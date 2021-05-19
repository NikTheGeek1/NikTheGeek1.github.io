const VISITOR_COOKIE = "VSC";
const VISITOR_TIME_COOKIE = "VST";

export const fetchVisitorCookie: () => string | null = () => {
    return localStorage.getItem(VISITOR_COOKIE  );
};

export const removeVisitorCookie: () => void = () => {
    localStorage.removeItem(VISITOR_COOKIE  );
};

export const storeVisitorCookie: (token: string) => void = (token) => {
    localStorage.setItem(VISITOR_COOKIE, token);
};

export const storeVisitTime = (): void => {
    localStorage.setItem(VISITOR_TIME_COOKIE, new Date().getTime().toString());
};

export const getVisitTime = (): string | null => {
    return localStorage.getItem(VISITOR_TIME_COOKIE);
}