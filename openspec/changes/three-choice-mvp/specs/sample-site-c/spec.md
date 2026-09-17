# Spec Delta

## Purpose

Sample website "C": one of the 3 candidate directions the friend can preview and choose from ThreeChoice's home page.

## ADDED Requirements

### Requirement: Sample site C is reachable via its own route
The system SHALL render sample site C's content when the visitor navigates to its route (directly, or via the home page option).

#### Scenario: Visitor opens sample site C
- **WHEN** a visitor navigates to sample site C's route
- **THEN** sample site C's content renders, distinct in look/content from sites A and B

### Requirement: Sample site C content is placeholder pending theme decision
The system SHALL render clearly-labeled placeholder content for sample site C until a real theme/content direction is chosen; the exact visual design and copy are out of scope for this change.

#### Scenario: Visitor views sample site C before a theme is chosen
- **WHEN** a visitor opens sample site C
- **THEN** the page identifies itself as "Sample Site C" so it can be evaluated distinctly from A and B
