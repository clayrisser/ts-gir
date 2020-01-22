const Gda = imports.gi.Gda;
const GdaDataAccessWrapper = Gda.DataAccessWrapper;
Gda.DataAccessWrapper = class DataAccessWrapper extends GdaDataAccessWrapper {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const GdaDataModelArray = Gda.DataModelArray;
Gda.DataModelArray = class DataModelArray extends GdaDataModelArray {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const GdaDataModelDir = Gda.DataModelDir;
Gda.DataModelDir = class DataModelDir extends GdaDataModelDir {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const GdaDataPivot = Gda.DataPivot;
Gda.DataPivot = class DataPivot extends GdaDataPivot {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const GdaDataProxy = Gda.DataProxy;
Gda.DataProxy = class DataProxy extends GdaDataProxy {
  constructor(...props) {
    super(...props);
    this.g_delete = this.delete;
  }
};
const GdaHandlerBin = Gda.HandlerBin;
Gda.HandlerBin = class HandlerBin extends GdaHandlerBin {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const GdaHandlerBoolean = Gda.HandlerBoolean;
Gda.HandlerBoolean = class HandlerBoolean extends GdaHandlerBoolean {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const GdaHandlerNumerical = Gda.HandlerNumerical;
Gda.HandlerNumerical = class HandlerNumerical extends GdaHandlerNumerical {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const GdaHandlerString = Gda.HandlerString;
Gda.HandlerString = class HandlerString extends GdaHandlerString {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const GdaHandlerTime = Gda.HandlerTime;
Gda.HandlerTime = class HandlerTime extends GdaHandlerTime {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const GdaHandlerType = Gda.HandlerType;
Gda.HandlerType = class HandlerType extends GdaHandlerType {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const GdaAttributesManager = Gda.AttributesManager;
Gda.AttributesManager = class AttributesManager extends GdaAttributesManager {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const GdaSqlCase = Gda.SqlCase;
Gda.SqlCase = class SqlCase extends GdaSqlCase {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const GdaSqlField = Gda.SqlField;
Gda.SqlField = class SqlField extends GdaSqlField {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const GdaSqlFunction = Gda.SqlFunction;
Gda.SqlFunction = class SqlFunction extends GdaSqlFunction {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const GdaSqlOperation = Gda.SqlOperation;
Gda.SqlOperation = class SqlOperation extends GdaSqlOperation {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const GdaSqlSelectField = Gda.SqlSelectField;
Gda.SqlSelectField = class SqlSelectField extends GdaSqlSelectField {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const GdaSqlSelectFrom = Gda.SqlSelectFrom;
Gda.SqlSelectFrom = class SqlSelectFrom extends GdaSqlSelectFrom {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const GdaSqlSelectJoin = Gda.SqlSelectJoin;
Gda.SqlSelectJoin = class SqlSelectJoin extends GdaSqlSelectJoin {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const GdaSqlSelectOrder = Gda.SqlSelectOrder;
Gda.SqlSelectOrder = class SqlSelectOrder extends GdaSqlSelectOrder {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const GdaSqlSelectTarget = Gda.SqlSelectTarget;
Gda.SqlSelectTarget = class SqlSelectTarget extends GdaSqlSelectTarget {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
const GdaSqlTable = Gda.SqlTable;
Gda.SqlTable = class SqlTable extends GdaSqlTable {
  constructor(...props) {
    super(...props);
    this.g_new = this.new;
  }
};
export default Gda;
