import { useCallback, useEffect, useMemo } from '@pionjs/pion';
import { apiUrl, postJSON, useApi } from '../../../api/use-api.js';
import { useDisplayLoadingInfo } from '../../../hooks/use-display-loading-info.js';
import { invoke } from '../helpers';
import type { Fields } from '../types';
import { useValidatedForm } from '../use-validated-form';

type Params = Record<string, number | string>;

interface Props<P extends Params = Params, I extends object = object> {
	url: string;
	params: P | ((values: I) => P);
	toJSON: (value: any) => string;
	onCreated: (value: any) => void;
	message: string;
	fields: Fields<I>;
	initial: I;
}
const useAddForm = ({
	url,
	params,
	toJSON = JSON.stringify,
	onCreated,
	message,
	...rest
}: Props) => {
	const form = useValidatedForm(rest),
		{ values, onReset } = form,
		{ fetching, fetch, data, error } = useApi(
			apiUrl(
				url,
				useMemo(() => invoke(params, values), [params, values]),
			),
			postJSON,
		);

	useDisplayLoadingInfo(fetching, message);
	useEffect(() => {
		if (data) {
			onReset();
			onCreated?.(data);
		}
	}, [data]);

	return {
		...form,
		error,
		onCreate: useCallback(
			() =>
				fetch({
					body: toJSON(values),
				}),
			[values],
		),
	};
};
export { useAddForm };
