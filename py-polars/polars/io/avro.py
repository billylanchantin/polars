from __future__ import annotations

import contextlib
from pathlib import Path
from typing import IO, TYPE_CHECKING

from polars._utils.various import normalize_filepath
from polars._utils.wrap import wrap_df
from polars.io._utils import handle_projection_columns

with contextlib.suppress(ImportError):  # Module not available when building docs
    from polars.polars import PyDataFrame

if TYPE_CHECKING:
    from polars import DataFrame


def read_avro(
    source: str | Path | IO[bytes] | bytes,
    *,
    columns: list[int] | list[str] | None = None,
    n_rows: int | None = None,
) -> DataFrame:
    """
    Read into a DataFrame from Apache Avro format.

    Parameters
    ----------
    source
        Path to a file or a file-like object (by file-like object, we refer to objects
        that have a `read()` method, such as a file handler (e.g. via builtin `open`
        function) or `BytesIO`).
    columns
        Columns to select. Accepts a list of column indices (starting at zero) or a list
        of column names.
    n_rows
        Stop reading from Apache Avro file after reading `n_rows`.

    Returns
    -------
    DataFrame
    """
    if isinstance(source, (str, Path)):
        source = normalize_filepath(source)
    projection, parsed_columns = handle_projection_columns(columns)

    pydf = PyDataFrame.read_avro(source, parsed_columns, projection, n_rows)
    return wrap_df(pydf)
