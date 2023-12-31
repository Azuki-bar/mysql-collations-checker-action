# mysql-collations-checker-action
Actions workflow for check collation of MySQL tables.

## How To Use

see [actions.yml](https://github.com/Azuki-bar/mysql-collations-checker-action/blob/main/action.yml).

```yml
steps:
  - uses: Azuki-bar/mysql-collations-checker-action@main
    with:
      table_definitions: |
        db/foo.sql
        db/bar.*.sql
      expect_collation: utf8mb4_general_ci
```

## inputs

### table_definitions
Path to table definitions file.
this input expects white space or newline seperated list.

accept asterisk to expand path.

### expect_collation

Specify expected collation value, For example, `utf8mb4_general_ci`.

### mysql_version
Specify MySQL Version. if not specified, use `latest`.

Workflows accepts https://hub.docker.com/_/mysql tags value like `8.0.33` or `8.0.33-debian`.

### ignore_tables

Specify ignored table name list.

this input expects white space or new line sererated list.

```yml
steps:
  - uses: Azuki-bar/mysql-collations-checker-action@main
    with:
      table_definitions: |
        db/foo.sql
        db/bar.*.sql
      expect_collation: utf8mb4_general_ci
      ignore_tables: |
        table1
        table2
```

## Author
[Azuki-bar](https://github.com/Azuki-bar)
