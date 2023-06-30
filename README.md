# mysql-collations-action
Actions workflow for check collation of MySQL tables with table definitions.

## How To Use

see [actions.yml](https://github.com/Azuki-bar/mysql-collations-action/blob/412738bf3dc06d5aaf0116b1b3d78cb5e4e6a782/action.yml).

```yml
steps:
  - uses: Azuki-bar/mysql-collations-action@main
    with:
      table_definitions: |
        db/foo.sql
        db/bar.*.sql
      accepted_collation: utf8mb4_general_ci
```

## inputs

### table_definitions
Path to table definitions file.
this input expects white space or newline seperated list.

accept asterisk to expand path.

### accepted_collation

Specify accepted collation value, For example, `utf8mb4_general_ci`.

### mysql_version
Specify MySQL Version. if not specified, use `latest`.

Workflows accepts https://hub.docker.com/_/mysql tags value like `8.0.33` or `8.0.33-debian`.

### ignore_tables

Specify ignored table name list.

this input expects white space or new line sererated list.

```yml
steps:
  - uses: Azuki-bar/mysql-collations-action@main
    with:
      table_definitions: |
        db/foo.sql
        db/bar.*.sql
      accepted_collation: utf8mb4_general_ci
      ignore_tables: |
        table1
        table2
```

## Author
[Azuki-bar](https://github.com/Azuki-bar)
