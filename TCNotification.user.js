// ==UserScript==
// @name         腾讯课堂签到提醒
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  腾讯课堂签到时弹出通知，可配置自动签到
// @author       askar882
// @match        https://ke.qq.com/webcourse/*
// @icon         data:image/png;base64,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
// @grant        none
// @run-at       document-idle
// ==/UserScript==

/* jshint esversion: 6, browser: true */

(function() {
    'use strict';

    // 启用自动签到
    const AUTO_SIGN_ENABLED = false;

    // 日志
    // const log = (...msg) => console.info(`%c${new Date().toISOString()}  腾讯课堂签到  `, 'color: blue;', ...msg);

    // 使用Notification API弹出通知
    const notify = (title, body, { tag = "", requireInteraction = true, callback = null } = {}) => {
        const createNotification = () => {
            const notification = new Notification(title, { body, tag, requireInteraction });
            notification.addEventListener('click', () => {
                window.focus();
                notification.close();
            });
            if (callback) {
                notification.addEventListener('click', callback);
            }
        };
        if(Notification.permission === 'granted' && title) {
            createNotification();
        } else {
            Notification.requestPermission().then(permission => {
                if(permission === 'granted' && title) {
                    createNotification();
                }
            });
        }
    };
    // Unix时间戳
    const getTime = () => Math.floor(new Date().getTime() / 1000);
    // 签到弹窗父元素
    const wrapper = document.getElementById('react-body');
    // 签到按钮
    const signButton = () => document.querySelector('#react-body > div.sign-dialog > div.im-dialog-wrap > div > div.btn-group > span');
    // 自动签到
    const autoSign = () => {
        if (signButton()) {
            signButton().click();
        }
    };
    // 最近一次签到时间，用于对通知进行节流
    let lastSignTime = getTime();
    // MutationObserver侦听器
    const wrapperMutation = () => {
        // 判断签到按钮是否存在
        if(signButton() && (getTime() - lastSignTime > 30)) {
            // log('签到');
            if (AUTO_SIGN_ENABLED) {
                autoSign();
                notify('腾讯课堂', '已完成自动签到', { callback: autoSign });
            } else {
                notify('腾讯课堂', '签到');
            }
            lastSignTime = getTime();
        }
    };
    // 按需申请通知权限
    if (Notification.permission !== 'granted') {
        notify(null, null);
    }
    const wrapperObserver = new MutationObserver(wrapperMutation);
    // 观察DOM树的父元素所有子孙节点的新增和删除
    wrapperObserver.observe(wrapper, {attributes: false, childList: true, subtree: true});
})();