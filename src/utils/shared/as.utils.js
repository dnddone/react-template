export const as = (source, defaultSource) => source ?? defaultSource;
as.o = (source) => as(source, {});
as.a = (source) => as(source, []);
