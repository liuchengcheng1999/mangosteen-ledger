export const throttle = <T extends (...args: any[]) => any>(fn: T, time: number) => {
    let timer: number | undefined = undefined
    let result: ReturnType<T>
    return (...args: Parameters<T>) => {
        if (timer) {
            return
        } else {
            result = fn(...args)
            timer = setTimeout(() => {
                timer = undefined
            }, time);
        }
    }
}