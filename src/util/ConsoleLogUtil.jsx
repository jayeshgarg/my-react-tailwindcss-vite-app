import React, {Component} from 'react';

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


    static debug(component, msg1, msg2) {
        if (this.#isDebugEnabled) {
            this.#log("Debug", component, msg1, msg2)
        }
    }

    static info(component, msg1, msg2) {
        if (this.#isInfoEnabled) {
            this.#log("Info", component, msg1, msg2)
        }
    }

    static warn(component, msg1, msg2) {
        if (this.#isWarnEnabled) {
            this.#log("Warn", component, msg1, msg2)
        }
    }

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
                console.log(stack)
            }
        } else {
            //in case of prod mode, this can be used to send logs to remote server like logstash for monitoring
        }
    }
}

export default Log;
