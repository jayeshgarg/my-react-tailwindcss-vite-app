import React from 'react';

/**
 * A logging utility class to help in easy and uniform logging in the application either locally
 * or at a remote location like Logstash.
 * <br/>
 * Using this utility, logs can be saved with different logging levels, levels can be enabled or
 * disabled, etc.
 */
class Log {

    static #_DEBUG = 0;
    static #_INFO = 1;
    static #_WARN = 2;
    static #_ERROR = 3;

    static #isDebugEnabled = false;
    static #isInfoEnabled = false;
    static #isWarnEnabled = false;
    static #isErrorEnabled = false;

    static get DEBUG() {
        return this.#_DEBUG;
    }

    static get INFO() {
        return this.#_INFO;
    }

    static get WARN() {
        return this.#_WARN;
    }

    static get ERROR() {
        return this.#_ERROR;
    }

    /**
     * Set global debug level for this application
     * Available options:-
     * <ol>
     * <li>DEBUG</li>
     * <li>INFO</li>
     * <li>WARN</li>
     * <li>ERROR</li>
     * </ol>
     * @example setLoggingLevel(DEBUG)
     */
    static setLoggingLevel(level) {
        switch (level) {
            case 1:
                this.#isDebugEnabled = false
                this.#isInfoEnabled = true
                this.#isWarnEnabled = true
                this.#isErrorEnabled = true
                break;
            case 2:
                this.#isDebugEnabled = false
                this.#isInfoEnabled = false
                this.#isWarnEnabled = true
                this.#isErrorEnabled = true
                break;
            case 3:
                this.#isDebugEnabled = false
                this.#isInfoEnabled = false
                this.#isWarnEnabled = false
                this.#isErrorEnabled = true
                break;
            default:
                this.#isDebugEnabled = true
                this.#isInfoEnabled = true
                this.#isWarnEnabled = true
                this.#isErrorEnabled = true
        }
    }

    /**
     * Log's message at debug level
     * @param component Name of the component or class from where its being called
     * @param msg1 Message (as string) for the log
     * @param msg2 Message (as string) for the log
     */
    static debug(component, msg1, msg2) {
        if (this.#isDebugEnabled) {
            this.#log("Debug", component, msg1, msg2)
        }
    }

    /**
     * Log's message at information level
     * @param component Name of the component or class from where its being called
     * @param msg1 Message (as string) for the log
     * @param msg2 Message (as string) for the log
     */
    static info(component, msg1, msg2) {
        if (this.#isInfoEnabled) {
            this.#log("Info", component, msg1, msg2)
        }
    }

    /**
     * Log's message at warning level
     * @param component Name of the component or class from where its being called
     * @param msg1 Message (as string) for the log
     * @param msg2 Message (as string) for the log
     */
    static warn(component, msg1, msg2) {
        if (this.#isWarnEnabled) {
            this.#log("Warn", component, msg1, msg2)
        }
    }

    /**
     * Log's message at error level
     * @param component Name of the component or class from where its being called
     * @param msg1 Message (as string) for the log
     * @param msg2 Message (as string) for the log
     * @param err Error stack for logging purpose
     */
    static error(component, msg1, msg2, err) {
        if (this.#isErrorEnabled) {
            this.#log("Error", component, msg1, msg2, err)
        }
    }

    static #log(level, component, msg1, msg2, stack) {
        const customDate = new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDate() +
            " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." +
            String(new Date().getMilliseconds()).padStart(3, '0')
        const completeLogMessage = customDate + " [" + level + "] [" + component + "] - " + msg1 + " - " + msg2

        const isDevMode = true;//true = console logging, false = remote logging

        if (isDevMode) {
            console.log(completeLogMessage);
            if (stack) {
                console.error(stack)
            }
        } else {
            //in case of prod mode, this can be used to send logs to remote server like logstash for monitoring
        }
    }
}

export default Log;
