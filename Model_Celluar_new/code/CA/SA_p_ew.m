% %%%%%%%%%% Initialization %%%%%%%%%%
% Attraction
miu_a = 40;
sigma_a = 10;
map_attract = map_produce(miu_a,sigma_a);
map_attract_alt = map_expand(map_attract);

% Distribution
D = 5; % Interval cell number (diatance=50m)
N_0 = 10000; % Number of earthworms released in each cell
map_ori = ew_release(N_0,D); % interval_each
map_now = map_ori;
map_now_alt = map_expand(map_now);

% Pb
rol_soil = 1500; % Soil density(kg/m^3) (1.5g/cm^3)
depth = 0.10; % The depth of the treated soil(m)
Length = 5; % The depth of the treated soil(m)
V_soil = Length*Length*depth;
c_Pb = (300-20)+40*rand(100,100); % The initial concentration of Pb in soil: 300(-20~+20)(mg/kg) rand
map_Pb_0 = V_soil * rol_soil * c_Pb; % (mg)
map_Pb_alt = map_expand(map_Pb_0);

%%%%%%%%%% Calculate %%%%%%%%%%
time = 2*30; % duration: 2 months
alpha = (exp(1)/9000) : (exp(1)/9000) : (5*exp(1)/9000);
degree = zeros(5,time);

for i = 1:5
    for j = 1:time
        map_now_alt = ew_spread_flex(map_now_alt,map_attract_alt,alpha(i));
%         map_attract_alt = attract_wave(map_attract_alt);
        map_attract_alt = attract_wave_2(map_now_alt,map_attract_alt);
        map_Pb_alt = delta_Pb(map_Pb_alt,map_now_alt);
        map_Pb = map_Pb_alt(2:101,2:101);
        map_Pb_ratio = ones(100) - map_Pb ./ map_Pb_0;
        degree(i,j) = mean(map_Pb_ratio(:));
    end
end

for i = 1:5
    hold on
    plot(1:time,degree(i,:),'LineWidth',2);
    %title('Sensitivity analysis of the coefficient of relation between food intake and earthworm weight ')
    xlabel('time(days)');
    ylabel('Purification Ratio of Pb');
    legend('alpha=0.0003','alpha=0.0006','alpha=0.0009','alpha=0.0012','alpha=0.0015');
end
hold off