import {os} from '@orpc/server'

export const base = os.$context<{ request: Request }>().errors({
    RATE_LIMITED: {
        message: 'you are being rate limited',
    },
    BAD_REQUEST: {
        message: 'Bad request',
    },
    NOT_FOUND: {
        message: 'Not found',
    },
    FORBIDDEN: {
        message: 'this is forbiden',
    },
    INTERNAL_SERVER_ERROR: {
        message: 'internar server error',
    },
})
