# jota.utils.IotaUnitConverter

## `public class IotaUnitConverter`

This class provides methods to convert Iota to different units.

 * **Author:** sascha

## `public static long convertUnits(long amount, IotaUnits fromUnit, IotaUnits toUnit)`

Convert the iota amount.

 * **Parameters:**
   * `amount` — The amount.
   * `fromUnit` — The source unit e.g. the unit of amount.
   * `toUnit` — The target unit.
 * **Returns:** The specified amount in the target unit.

     <p>

## `private static long convertUnits(long amount, IotaUnits toUnit)`

Convert unit.

 * **Parameters:**
   * `amount` — The amount.
   * `toUnit` — The target unit.
 * **Returns:** The specified amount in the target unit.

     <p>

## `public static String convertRawIotaAmountToDisplayText(long amount, boolean extended)`

Convert the iota amount to text.

 * **Parameters:**
   * `amount` — The amount.
   * `extended` — Extended length.
 * **Returns:** The specified amount in the target unit.

     <p>

## `public static double convertAmountTo(long amount, IotaUnits target)`

Convert amount to target unit.

 * **Parameters:** `amount` — The amount.
 * **Returns:** The target unit.

     <p>

## `private static String createAmountWithUnitDisplayText(double amountInUnit, IotaUnits unit, boolean extended)`

Create amount with unit text.

 * **Parameters:**
   * `amountInUnit` — The amount in units.
   * `unit` — The unit.
   * `extended` — Extended length.
 * **Returns:** The target unit.

     <p>

## `public static String createAmountDisplayText(double amountInUnit, IotaUnits unit, boolean extended)`

Create amount text.

 * **Parameters:**
   * `amountInUnit` — The amount in units.
   * `unit` — The unit.
   * `extended` — Extended length.
 * **Returns:** The target unit.

     <p>

## `public static IotaUnits findOptimalIotaUnitToDisplay(long amount)`

Finds the optimal unit to display the specified amount in.

 * **Parameters:** `amount` — The amount.
 * **Returns:** The optimal IotaUnit.

     <p>
