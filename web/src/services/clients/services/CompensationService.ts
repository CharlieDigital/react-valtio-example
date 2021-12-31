/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CompensationService {

    /**
     * @returns string Success
     * @throws ApiError
     */
    public static getCompensation(): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/Compensation`,
        });
    }

}