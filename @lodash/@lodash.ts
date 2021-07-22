import __ from 'lodash';

const _ = __.runInContext();


interface LoDashMixins extends _.LoDashStatic {
	getEmptyFields<T>(obj: { [K in string]: string }): T[];
}

_.mixin({
	// Immutable Set for setting state
	// stringSpread

	// getFalseKeys: (obj: object): Array<string> => {
	//     return _.keys(_.pickBy(obj, el => !el));
	// }
	getEmptyFields: (obj: { [K in string]: string }): Array<string> => {
		return _.keys(
			_.pickBy(obj, (el: string) => {
				return !(el && _.isString(el) && el.trim());
			})
		);
	}
});

export default <LoDashMixins>_;
