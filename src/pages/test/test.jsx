/* eslint-disable no-undef */
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import {
  Button,
  FormControlLabel,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Switch,
  TextField,
  styled,
} from '@mui/material';
import { switchClasses } from '@mui/material/Switch';
import { columnsMockGrid } from './mock';

const GridColumnsPanelRoot =
  styled('div', {
    name: 'MuiDataGrid',
    slot: 'ColumnsPanel',
  }) <
  {} >
  {
    padding: '8px 0px 8px 8px',
  };

const GridColumnsPanelRowRoot =
  styled('div', {
    name: 'MuiDataGrid',
    slot: 'ColumnsPanelRow',
  }) <
  {} >
  (({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1px 8px 1px 7px',
    [`& .${switchClasses.root}`]: {
      marginRight: theme.spacing(0.5),
    },
  }));

const GridIconButtonRoot = styled(IconButton)({
  justifyContent: 'flex-end',
});

const GridPanelFooterRoot =
  styled('div', {
    name: 'MuiDataGrid',
    slot: 'PanelFooter',
  }) <
  {} >
  (({ theme }) => ({
    padding: theme.spacing(0.5),
    display: 'flex',
    justifyContent: 'space-between',
  }));

const GridPanelHeaderRoot =
  styled('div', {
    name: 'MuiDataGrid',
    slot: 'PanelHeader',
  }) <
  {} >
  (({ theme }) => ({
    padding: theme.spacing(1),
  }));
const currentColumns = columnsMockGrid;
export const Test = () => {
  const disableHideAllButton = false;
  const disableShowAllButton = false;
  return (
    <>
      <MenuItem>
        <ListItemIcon>
          <ViewColumnIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText>columnMenuManageColumns</ListItemText>
      </MenuItem>
      <div>
        <div>
          <TextField
            label={'columnsPanelTextFieldLabel'}
            placeholder={'columnsPanelTextFieldPlaceholder'}
            // inputRef={searchInputRef}
            // value={searchValue}
            // onChange={handleSearchValueChange}
            variant='standard'
            fullWidth
            // {...rootProps.slotProps?.baseTextField}
          />
        </div>
        <div>
          <div>
            {currentColumns.map((column) => (
              <div
                // className={classes.columnsPanelRow}
                // ownerState={rootProps}
                key={column.field}
              >
                <FormControlLabel
                  control={
                    <Switch
                      disabled={column.hideable === false}
                      // checked={columnVisibilityModel[column.field] !== false}
                      // onClick={toggleColumn}
                      name={column.field}
                      size='small'
                      // inputRef={
                      //   isFirstHideableColumn(column)
                      //     ? firstSwitchRef
                      //     : undefined
                      // }
                      // {...rootProps.slotProps?.baseSwitch}
                    />
                  }
                  label={column.headerName || column.field}
                />
              </div>
            ))}
          </div>
        </div>
        {disableShowAllButton && disableHideAllButton ? null : (
          <div>
            {!disableHideAllButton ? (
              <Button
                onClick={() => toggleAllColumns(false)}
                // {...rootProps.slotProps?.baseButton}
                disabled={disableHideAllButton}
              >
                'columnsPanelHideAllButton'
              </Button>
            ) : (
              <span />
            )}

            {!disableShowAllButton ? (
              <Button
                onClick={() => toggleAllColumns(true)}
                // {...rootProps.slotProps?.baseButton}
                disabled={disableShowAllButton}
              >
                columnsPanelShowAllButton
              </Button>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
};
